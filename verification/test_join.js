const { joinSession } = require('../functions/index.js');
const { sessionRepo, sessionParticipantRepo, membershipRepo, userRepo, roomRepo } = require('../functions/dataLayer.js');

// Mock request
function mockRequest(data, userId) {
    return {
        data: data,
        auth: { uid: userId }
    };
}

async function runTest() {
    console.log("Setting up test data...");
    const userId = "test_user_join_" + Date.now();
    const roomId = "test_room_join_" + Date.now();
    const sessionId = "test_session_join_" + Date.now();

    // Setup Room
    await roomRepo.createRoom({
        id: roomId,
        name: "Test Room",
        ownerId: "owner_1"
    });

    // Setup User Membership
    await membershipRepo.createMembership({
        roomId: roomId,
        userId: userId,
        role: "member"
    });

    // Setup Session
    await sessionRepo.createSession({
        id: sessionId,
        roomId: roomId,
        userId: "owner_1",
        startTime: Date.now(),
        durationMinutes: 60,
        mode: "focus"
    });

    console.log("Testing joinSession...");
    try {
        const result = await joinSession.run(mockRequest({ sessionId: sessionId }, userId));
        console.log("Join result:", result);
    } catch (e) {
        console.error("Join failed:", e);
    }

    // Verify participant
    const participants = await sessionParticipantRepo.getParticipants(sessionId);
    const p = participants.find(p => p.userId === userId);
    if (p) {
        console.log("SUCCESS: User added to participants.");
    } else {
        console.error("FAILURE: User not found in participants.");
    }

    // Test Idempotency (joining again)
    console.log("Testing joinSession again (idempotency)...");
    try {
        const result = await joinSession.run(mockRequest({ sessionId: sessionId }, userId));
        console.log("Join result 2:", result);
    } catch (e) {
        console.error("Join failed 2:", e);
    }
}

// Need to shim functions onCall.run or just call logic directly?
// functions v2 onCall returns a function that takes (request).
// But for testing locally without firebase-functions-test wrapping, we can't easily invoke 'onCall' returned function directly as a standard JS function?
// 'onCall' returns a "CallableFunction" which has a .run() method in test mode? Or is just the handler?
// Actually, firebase-functions v2 onCall wraps the handler.
// To test, we should extract the handler or use firebase-functions-test.

// Let's try to just invoke the handler logic by extracting it? No, that's messy.
// We have `firebase-functions-test` in devDependencies.

const test = require('firebase-functions-test')();

// We need to reload index.js after initializing test
// But index.js initializes admin.
// We must mock admin or let it run.
// Since we are in the sandbox, we might not have credentials for admin unless we set GOOGLE_APPLICATION_CREDENTIALS
// or use a mock firestore.

// Given the environment constraints, maybe simpler to just inspect the code logic again.
// Code:
/*
  const session = await sessionRepo.getSessionById(sessionId);
  if (!session) ...
  const members = await membershipRepo.getMembers(session.roomId);
  // ...
  await sessionParticipantRepo.addParticipant(...);
  return { success: true };
*/
// The logic is:
// 1. Get session.
// 2. Get members of session's room.
// 3. Check if user is in members.
// 4. Add participant.

// Problem: `getMembers` returns ALL members. If a room has 1000 members, this is slow/expensive/fails?
// But for now it's small.
// Does `addParticipant` work?
/*
  async addParticipant(data) {
    const q = await this.collection ... .limit(1).get();
    if (!q.empty) return q.docs[0].data();
    const entity = mapToEntity(...);
    await this.collection.doc(entity.id).set(entity);
    return entity;
  }
*/
// It returns the entity object (with ID etc).
// `joinSession` returns `{ success: true }`.

// The frontend calls `await api.joinSession(...)`.
// Then calls `onJoinSession(...)`.

// Wait!
// `RoomDetails.jsx`:
/*
            onClick={async () => {
                await api.joinSession(activeSession.id);
                onJoinSession(activeSession);
            }}
*/

// If `api.joinSession` throws, `onJoinSession` is skipped.
// If the user is *already* a participant, `joinSession` (backend) returns `{ success: true }`.
// It does NOT throw.

// So, if it fails, it must throw.
// Why would it throw?
// 1. Not a member of the room?
// 2. Session not found?
// 3. Firestore error?

// Let's look closely at `getMembers` in `dataLayer.js`.
/*
  async getMembers(roomId) {
    const snapshot = await this.collection.where('roomId', '==', roomId).get();
    return snapshot.docs.map(doc => doc.data());
  }
*/
// Seems fine.

// Let's look at `SessionView` crash possibility again.
// `RoomsPage.jsx`:
/*
  const handleSessionStarted = (newSession) => {
    const room = rooms.find(r => r.id === newSession.roomId);
    setSessionRoom(room);
    setActiveSession(newSession);
  };
*/
// `rooms` is state. `activeSession` is passed from `RoomDetails` -> `activeSession` state.
// `RoomDetails` finds `activeSession` from `api.getSessions`.
// `getSessions` returns session objects.
// `session.roomId` MUST be correct.

// Is it possible `rooms.find` returns undefined?
// Only if `rooms` array in `RoomsPage` does not contain the room.
// But `RoomsPage` renders `RoomDetails` ONLY if `selectedRoom` (which comes from `rooms`) is set.
// So the room must be in the list.

// Wait. `RoomDetails` is passed `room={selectedRoom}`.
// `RoomDetails` fetches sessions.
// User clicks Join.
// `handleSessionStarted(activeSession)` called.
// `rooms.find(r => r.id === newSession.roomId)` called.
// `newSession.roomId` should match `selectedRoom.id`.

// UNLESS... `activeSession` has a WRONG `roomId`?
// `activeSession` comes from `api.getSessions(room.id)`.
// `getSessions` implementation:
/*
  async getSessionsForRoom(roomId) {
    const snapshot = await this.collection.where('roomId', '==', roomId).get();
    return snapshot.docs.map(doc => doc.data());
  }
*/
// So it must have the correct `roomId`.

// What if `activeSession` is stale?
// `RoomDetails` polls every 10s.

// Let's check the logs or try to reproduce via `frontend_verification_instructions`.
// But first, let's fix a potential issue in `joinSession` backend:
// It should probably check if the user is already a participant before adding, although `addParticipant` handles it.

// Maybe the issue is simpler.
// "The sessions does not work when i try to join it".
// Is it possible the *click* event is propagating or form submission? No, it's a button.

// Is it possible `activeSession.id` is missing?
// `const sessionId = activeSession ? activeSession.id : "s_placeholder_123";`
// But the button is only rendered if `activeSession` is truthy.

// Let's look at `SessionView` again.
// Maybe `SessionView` crashes immediately?
// `useEffect` ... `api.getSessionDetails`.
// If `api.getSessionDetails` fails? It catches error.
// `participants.map(...)`. `participants` initialized to `[]`.
// `session.mode.replace(...)`. `session` is `activeSession`. `mode` should exist.

// Wait! `dataLayer.js` schema for Session:
/*
  Session: {
    // ...
    mode: { default: "focus" },
    // ...
  }
*/
// If `mode` is missing in data, `mapToEntity` sets default.
// But if data was created *without* `mapToEntity` (unlikely), it might be missing.
// But we use `createSession` which uses `mapToEntity`.

// Let's verify `joinSession` in `preact-app/src/api.js` again.
// It awaits `joinSessionCallable`.
// If that returns, it returns result.data.

// I'll add error logging to `RoomDetails.jsx` to see if join fails.

// I will also verify `SessionView.jsx` handles missing `currentSession` gracefully.
// `const [currentSession, setCurrentSession] = useState(session);`
// If `session` is passed, `currentSession` is set.
// `(currentSession?.mode || session.mode).replace(...)`
// If `session.mode` is undefined? `replace` crashes.
// This is a candidate for a crash.

// Also `session.startTime`.

// I will create a reproduction/verification script that attempts to join a session in the UI (mocked).
// But since I suspect a logic error or a crash, I should just fix the robustness.

// PLAN:
// 1. Add try-catch and logging to `RoomDetails.jsx` around `api.joinSession`.
// 2. Add safety checks in `SessionView.jsx` to prevent crashes if data is malformed (e.g. `mode`, `startTime`).
// 3. Verify `joinSession` in `functions/index.js` explicitly returns success even if user is already joined (it does).

// Let's try to simulate the join failure by creating a verification script that uses the *real* app but mocks the API response to fail or succeed, and sees what happens.

// Actually, I can use the `frontend_verification_instructions` to test the "Join" button click if I can get the UI to that state.
// Getting to "Join" state requires: Login -> Create/Select Room -> Start Session (as someone else or wait for one).
// I can mock `api.getSessions` to return an active session, so the "Join" button appears.
// Then I can mock `api.joinSession` to succeed.
// Then I can see if `onJoinSession` is called and view changes.

// If it works in mock, then the issue is the backend or network.
// If it fails in mock, the issue is frontend logic.

// Let's modify `preact-app/src/app.jsx` again to setup a test for RoomDetails + Join.
