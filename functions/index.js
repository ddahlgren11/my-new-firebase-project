/**
 * Firebase Functions v2 HTTPS API for Procrastinot
 * Implementing endpoints for frontend usage via httpsCallable.
 */

const { setGlobalOptions } = require("firebase-functions");
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");

admin.initializeApp();
setGlobalOptions({ maxInstances: 10 });

// Import Data Layer (Local copy for deployment compatibility)
// Note: dataLayer now uses admin.firestore(), so admin must be initialized first (which it is above).
const {
  roomRepo,
  sessionRepo,
  userRepo,
  membershipRepo
} = require("./dataLayer.js");


// --- Helper to get user ID ---
function getUserId(request) {
  // In a real app with Firebase Auth, use request.auth.uid
  if (request.auth) {
    return request.auth.uid;
  }
  // Fallback for development/unauthenticated
  return "default_user";
}

// =====================================================================
// getRooms
// =====================================================================
exports.getRooms = onCall(async (request) => {
  const userId = getUserId(request);
  logger.info("getRooms called", { userId });

  // Use the new getAllRooms method (or getRoomsForUser if implemented fully)
  // Since createRoom and getRooms are async now, we must await them.
  const rooms = await roomRepo.getAllRooms();

  return rooms;
});

// =====================================================================
// createRoom
// =====================================================================
exports.createRoom = onCall(async (request) => {
  const userId = getUserId(request);
  const { name, description } = request.data;

  logger.info("createRoom called", { userId, name });

  if (!name) {
    throw new HttpsError("invalid-argument", "The function must be called with a 'name' argument.");
  }

  // Create the room
  const newRoom = await roomRepo.createRoom({
    name,
    description: description || "",
    ownerId: userId
  });

  // Automatically add the creator as a member
  await membershipRepo.createMembership({
    roomId: newRoom.id,
    userId: userId,
    role: "admin"
  });

  return newRoom;
});

// =====================================================================
// joinRoom
// =====================================================================
exports.joinRoom = onCall(async (request) => {
  const userId = getUserId(request);
  const { inviteCode } = request.data;

  logger.info("joinRoom called", { userId, inviteCode });

  // Use the new getRoomByInviteCode method
  const room = await roomRepo.getRoomByInviteCode(inviteCode);

  if (!room) {
      throw new HttpsError("not-found", "Room not found or invalid invite code.");
  }

  // Check if already a member
  const existingMembers = await membershipRepo.getMembers(room.id);
  const isMember = existingMembers.some(m => m.userId === userId);

  if (isMember) {
     // Already joined, just return the room
     return room;
  }

  await membershipRepo.createMembership({
    roomId: room.id,
    userId: userId,
    role: "member"
  });

  return room;
});

// =====================================================================
// startSession
// =====================================================================
exports.startSession = onCall(async (request) => {
  const userId = getUserId(request);
  const { roomId, mode, name, description, duration } = request.data;

  logger.info("startSession called", { userId, roomId, mode });

  if (!roomId) {
    throw new HttpsError("invalid-argument", "The function must be called with a 'roomId' argument.");
  }

  // Verify room exists
  const room = await roomRepo.getRoomById(roomId);
  if (!room) {
    throw new HttpsError("not-found", "Room not found.");
  }

  const newSession = await sessionRepo.createSession({
    roomId,
    userId,
    mode: mode || "pomodoro",
    name: name || "",
    description: description || "",
    durationMinutes: duration || 25,
    startTime: Date.now()
  });

  return newSession;
});
