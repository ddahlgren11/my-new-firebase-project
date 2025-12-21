/**
 * Firebase Functions v2 HTTPS API for Procrastinot
 * Express App with OpenAPI-mapped routes.
 */

const { onRequest } = require("firebase-functions/v2/https");
const { setGlobalOptions } = require("firebase-functions/v2");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

admin.initializeApp();
setGlobalOptions({ maxInstances: 10 });

// Import Data Layer
const {
  roomRepo,
  sessionRepo,
  userRepo,
  membershipRepo,
  friendshipRepo,
  taskRepo,
  sessionParticipantRepo
} = require("./dataLayer.js");

// Create a Router for the API to handle paths agnostic of prefix
const apiRouter = express.Router();

// Middleware on the router
apiRouter.use(cors({ origin: true }));
apiRouter.use(express.json());

// Auth Middleware
const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const idToken = authHeader.split('Bearer ')[1];
    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      req.user = decodedToken;
    } catch (error) {
      logger.error("Error verifying auth token", error);
    }
  }

  // Set fallback if no user
  if (!req.user) {
      req.user = { uid: "default_user" };
  }
  next();
};

apiRouter.use(authenticate);

const getUserId = (req) => req.user.uid;

// Routes

// --- Users ---

// Sync User (PUT /users/:userId or POST /users/sync)
apiRouter.put('/users/:userId', async (req, res) => {
    const userId = getUserId(req);
    const targetId = req.params.userId === 'me' ? userId : req.params.userId;

    // STRICT SECURITY CHECK
    if (userId === 'default_user') {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    if (targetId !== userId) {
        return res.status(403).json({ error: 'Forbidden: Cannot update other user profiles' });
    }

    const existingUser = await userRepo.getUserById(targetId);

    const displayName = req.user.name || (req.user.email ? req.user.email.split('@')[0] : "Guest");
    const avatarUrl = req.user.picture || "";
    const email = req.user.email || "";

    if (!existingUser) {
        await userRepo.createUser({
            id: targetId,
            displayName,
            email,
            avatarUrl
        });
    } else {
        const updates = {};
        if (displayName && existingUser.displayName !== displayName) updates.displayName = displayName;
        if (avatarUrl && existingUser.avatarUrl !== avatarUrl) updates.avatarUrl = avatarUrl;
        if (Object.keys(updates).length > 0) {
            await userRepo.updateUser(targetId, updates);
        }
    }
    res.json({ success: true });
});

// Get User Profile
apiRouter.get('/users/:userId', async (req, res) => {
    const requestUserId = req.params.userId;
    const currentUserId = getUserId(req);

    const targetId = requestUserId === 'me' ? currentUserId : requestUserId;

    // STRICT SECURITY CHECK: Only allow accessing own profile
    if (targetId !== currentUserId) {
         return res.status(403).json({ error: 'Forbidden: Cannot view other user profiles' });
    }

    const user = await userRepo.getUserById(targetId);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
});


// --- Rooms ---

// Get User's Rooms
apiRouter.get('/users/:userId/rooms', async (req, res) => {
    const userId = getUserId(req);
    const targetId = req.params.userId === 'me' ? userId : req.params.userId;

    if (targetId !== userId) {
         return res.status(403).json({ error: 'Forbidden' });
    }
    const rooms = await roomRepo.getRoomsForUser(userId);
    res.json(rooms);
});

// Create Room
apiRouter.post('/rooms', async (req, res) => {
    const userId = getUserId(req);
    const { name, description } = req.body;

    if (!name) return res.status(400).json({ error: 'Name is required' });

    const newRoom = await roomRepo.createRoom({
        name,
        description: description || "",
        ownerId: userId
    });

    await membershipRepo.createMembership({
        roomId: newRoom.id,
        userId: userId,
        role: "admin"
    });

    res.status(201).json(newRoom);
});

// Join Room (Custom route for convenience: POST /rooms/join)
apiRouter.post('/rooms/join', async (req, res) => {
    const userId = getUserId(req);
    const { inviteCode } = req.body;

    if (!inviteCode) return res.status(400).json({ error: 'Invite code required' });

    const room = await roomRepo.getRoomByInviteCode(inviteCode);
    if (!room) return res.status(404).json({ error: 'Room not found or invalid code' });

    const existingMembers = await membershipRepo.getMembers(room.id);
    const isMember = existingMembers.some(m => m.userId === userId);

    if (!isMember) {
        await membershipRepo.createMembership({
            roomId: room.id,
            userId: userId,
            role: "member"
        });
    }

    res.json(room);
});

// OpenAPI Join Room: POST /rooms/:roomId/memberships
apiRouter.post('/rooms/:roomId/memberships', async (req, res) => {
    const userId = getUserId(req);
    const { roomId } = req.params;
    const { inviteCode } = req.body;

    if (!inviteCode) return res.status(400).json({ error: 'Invite code required' });

    const room = await roomRepo.getRoomByInviteCode(inviteCode);
    if (!room) return res.status(404).json({ error: 'Invalid invite code' });

    if (room.id !== roomId) {
        return res.status(400).json({ error: 'Invite code does not match the room ID' });
    }

    const existingMembers = await membershipRepo.getMembers(room.id);
    const isMember = existingMembers.some(m => m.userId === userId);

    if (!isMember) {
        await membershipRepo.createMembership({
            roomId: room.id,
            userId: userId,
            role: "member"
        });
    }

    res.json(room);
});

// --- Sessions ---

// Start Session
apiRouter.post('/rooms/:roomId/sessions', async (req, res) => {
    const userId = getUserId(req);
    const { roomId } = req.params;
    const { mode, name, description, duration } = req.body;

    const room = await roomRepo.getRoomById(roomId);
    if (!room) return res.status(404).json({ error: 'Room not found' });

    const members = await membershipRepo.getMembers(roomId);
    if (!members.some(m => m.userId === userId)) {
        return res.status(403).json({ error: 'Not a member' });
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

    await sessionParticipantRepo.addParticipant({
        sessionId: newSession.id,
        userId: userId
    });

    res.status(201).json(newSession);
});

// Join Session
apiRouter.post('/rooms/:roomId/sessions/:sessionId/users', async (req, res) => {
    const userId = getUserId(req);
    const { sessionId } = req.params;

    const session = await sessionRepo.getSessionById(sessionId);
    if (!session) return res.status(404).json({ error: 'Session not found' });

    const members = await membershipRepo.getMembers(session.roomId);
    if (!members.some(m => m.userId === userId)) return res.status(403).json({ error: 'Not a room member' });

    await sessionParticipantRepo.addParticipant({ sessionId, userId });
    res.json({ success: true });
});

// End Session
apiRouter.post('/rooms/:roomId/sessions/:sessionId/end', async (req, res) => {
    const userId = getUserId(req);
    const { sessionId } = req.params;

    const session = await sessionRepo.getSessionById(sessionId);
    if (!session) return res.status(404).json({ error: 'Session not found' });

    if (session.userId !== userId) return res.status(403).json({ error: 'Only owner can end session' });

    await sessionRepo.updateSession(sessionId, { endTime: Date.now() });
    res.json({ success: true });
});

// Get Session Details
apiRouter.get('/rooms/:roomId/sessions/:sessionId', async (req, res) => {
    const userId = getUserId(req);
    const { sessionId } = req.params;

    const session = await sessionRepo.getSessionById(sessionId);
    if (!session) return res.status(404).json({ error: 'Session not found' });

    const members = await membershipRepo.getMembers(session.roomId);
    if (!members.some(m => m.userId === userId)) return res.status(403).json({ error: 'Not a room member' });

    const participants = await sessionParticipantRepo.getParticipants(sessionId);
    const users = await Promise.all(participants.map(async p => {
        const user = await userRepo.getUserById(p.userId);
        return {
            userId: p.userId,
            displayName: user ? user.displayName : "Unknown",
            avatarUrl: user ? user.avatarUrl : ""
        };
    }));

    res.json({ session, participants: users });
});

// Convenience Routes for Session ID only access (when Room ID is not available in frontend)
apiRouter.post('/sessions/:sessionId/join', async (req, res) => {
    const userId = getUserId(req);
    const { sessionId } = req.params;

    // Find session to get roomId
    const session = await sessionRepo.getSessionById(sessionId);
    if (!session) return res.status(404).json({ error: 'Session not found' });

    // Reuse logic by calling the main logic or just duplicating here for simplicity
    const members = await membershipRepo.getMembers(session.roomId);
    if (!members.some(m => m.userId === userId)) return res.status(403).json({ error: 'Not a room member' });

    await sessionParticipantRepo.addParticipant({ sessionId, userId });
    res.json({ success: true });
});

apiRouter.post('/sessions/:sessionId/end', async (req, res) => {
    const userId = getUserId(req);
    const { sessionId } = req.params;

    const session = await sessionRepo.getSessionById(sessionId);
    if (!session) return res.status(404).json({ error: 'Session not found' });

    if (session.userId !== userId) return res.status(403).json({ error: 'Only owner can end session' });

    await sessionRepo.updateSession(sessionId, { endTime: Date.now() });
    res.json({ success: true });
});

apiRouter.get('/sessions/:sessionId', async (req, res) => {
    const userId = getUserId(req);
    const { sessionId } = req.params;

    const session = await sessionRepo.getSessionById(sessionId);
    if (!session) return res.status(404).json({ error: 'Session not found' });

    // Verify membership
    const members = await membershipRepo.getMembers(session.roomId);
    if (!members.some(m => m.userId === userId)) return res.status(403).json({ error: 'Not a room member' });

    const participants = await sessionParticipantRepo.getParticipants(sessionId);
    const users = await Promise.all(participants.map(async p => {
        const user = await userRepo.getUserById(p.userId);
        return {
            userId: p.userId,
            displayName: user ? user.displayName : "Unknown",
            avatarUrl: user ? user.avatarUrl : ""
        };
    }));

    res.json({ session, participants: users });
});

// Get Sessions for Room
apiRouter.get('/rooms/:roomId/sessions', async (req, res) => {
    const userId = getUserId(req);
    const { roomId } = req.params;

    const members = await membershipRepo.getMembers(roomId);
    if (!members.some(m => m.userId === userId)) return res.status(403).json({ error: 'Not a room member' });

    const sessions = await sessionRepo.getSessionsForRoom(roomId);
    res.json(sessions);
});


// --- Friends ---

// Get Friends
apiRouter.get('/users/:userId/friends', async (req, res) => {
    const userId = getUserId(req);
    const targetId = req.params.userId === 'me' ? userId : req.params.userId;

    // Allow viewing friends of others? Original API was just "getFriends" for self.
    if (targetId !== userId) return res.status(403).json({ error: 'Forbidden' });

    const friendships = await friendshipRepo.getFriendshipsForUser(targetId);
    const friendIds = friendships.map(f => f.userId1 === targetId ? f.userId2 : f.userId1);

    if (friendIds.length === 0) return res.json([]);

    const friends = await Promise.all(friendIds.map(async (fid) => {
        const user = await userRepo.getUserById(fid);
        if (!user) return null;

        const sessions = await sessionRepo.getSessionsForUser(fid);
        const activeSession = sessions.find(s => !s.endTime);
        let status = "offline";
        if (activeSession) {
             const elapsed = (Date.now() - activeSession.startTime) / 60000;
             if (elapsed < activeSession.durationMinutes) status = "in-session";
        }

        return {
            id: user.id,
            name: user.displayName,
            avatarUrl: user.avatarUrl,
            status: status
        };
    }));

    res.json(friends.filter(f => f !== null));
});

// Add Friend
apiRouter.post('/friends', async (req, res) => {
    const userId = getUserId(req);
    const { friendCode, username, targetUserId } = req.body;

    if (!friendCode && !username && !targetUserId) return res.status(400).json({ error: 'Missing arguments' });

    let targetUser = null;
    if (targetUserId) {
        targetUser = await userRepo.getUserById(targetUserId);
    } else if (friendCode) {
        const snap = await userRepo.collection.where("friendCode", "==", friendCode).limit(1).get();
        if (!snap.empty) targetUser = snap.docs[0].data();
    } else if (username) {
        const snap = await userRepo.collection.where("displayName", "==", username).limit(1).get();
        if (!snap.empty) targetUser = snap.docs[0].data();
    }

    if (!targetUser) return res.status(404).json({ error: 'User not found' });
    if (targetUser.id === userId) return res.status(400).json({ error: 'Cannot add self' });

    const areFriends = await friendshipRepo.areFriends(userId, targetUser.id);
    if (areFriends) return res.status(409).json({ error: 'Already friends' });

    await friendshipRepo.createFriendship({
        userId1: userId,
        userId2: targetUser.id,
        status: "accepted"
    });

    res.json({ message: "Friend added", friend: targetUser });
});

// Suggested Friends
apiRouter.get('/friends/suggestions', async (req, res) => {
    const userId = getUserId(req);

    const myRooms = await roomRepo.getRoomsForUser(userId);
    if (myRooms.length === 0) return res.json([]);

    const suggestedUserIds = new Set();
    for (const room of myRooms) {
        const members = await membershipRepo.getMembers(room.id);
        for (const m of members) {
            if (m.userId !== userId) suggestedUserIds.add(m.userId);
        }
    }

    const friendships = await friendshipRepo.getFriendshipsForUser(userId);
    const friendIds = new Set(friendships.map(f => f.userId1 === userId ? f.userId2 : f.userId1));
    const candidateIds = [...suggestedUserIds].filter(uid => !friendIds.has(uid));
    const limitedIds = candidateIds.slice(0, 5);

    const suggestions = await Promise.all(limitedIds.map(async (uid) => {
        const user = await userRepo.getUserById(uid);
        return user ? {
            id: user.id,
            name: user.displayName,
            avatarUrl: user.avatarUrl
        } : null;
    }));

    res.json(suggestions.filter(u => u !== null));
});


// --- Tasks ---

// Create Task
apiRouter.post('/tasks', async (req, res) => {
    const userId = getUserId(req);
    const { title, roomId } = req.body;

    if (!title) return res.status(400).json({ error: 'Title required' });

    if (roomId) {
        const members = await membershipRepo.getMembers(roomId);
        if (!members.some(m => m.userId === userId)) return res.status(403).json({ error: 'Not a member' });
    }

    const newTask = await taskRepo.createTask({
        userId,
        roomId: roomId || null,
        title,
        completed: false
    });

    res.status(201).json(newTask);
});

// Get Tasks
apiRouter.get('/tasks', async (req, res) => {
    const userId = getUserId(req);
    const { roomId, includeAllUsers } = req.query;

    let tasks;
    if (roomId) {
        const members = await membershipRepo.getMembers(roomId);
        if (!members.some(m => m.userId === userId)) {
            return res.status(403).json({ error: 'Not a member' });
        }

        if (includeAllUsers === 'true') {
             tasks = await taskRepo.getAllTasksForRoom(roomId);
             const uniqueUserIds = [...new Set(tasks.map(t => t.userId))];
             const userMap = {};
             await Promise.all(uniqueUserIds.map(async uid => {
                 const u = await userRepo.getUserById(uid);
                 if (u) userMap[uid] = u;
             }));
             tasks = tasks.map(t => ({
                 ...t,
                 user: userMap[t.userId] ? { displayName: userMap[t.userId].displayName, avatarUrl: userMap[t.userId].avatarUrl } : null
             }));
        } else {
            tasks = await taskRepo.getTasksForRoom(userId, roomId);
        }
    } else {
        tasks = await taskRepo.getTasksForUser(userId);
    }
    tasks.sort((a, b) => b.createdAt - a.createdAt);
    res.json(tasks);
});

// Update Task
apiRouter.patch('/tasks/:taskId', async (req, res) => {
    const userId = getUserId(req);
    const { taskId } = req.params;
    const { completed } = req.body;

    const task = await taskRepo.getTaskById(taskId);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    if (task.userId !== userId) return res.status(403).json({ error: 'Forbidden' });

    const updatedTask = await taskRepo.updateTask(taskId, {
        completed,
        completedAt: completed ? Date.now() : null
    });
    res.json(updatedTask);
});

// Nudge
apiRouter.post('/nudges', async (req, res) => {
    const userId = getUserId(req);
    const { friendId } = req.body;

    const friend = await userRepo.getUserById(friendId);
    if (!friend) return res.status(404).json({ error: 'Friend not found' });

    res.json({ success: true, message: `Nudged ${friend.displayName}!` });
});

// Initialize the main app
const app = express();

// Register the Router on the main app
// Mount at both root and /api to handle various hosting/proxy configurations
app.use('/', apiRouter);
app.use('/api', apiRouter);

// Export API
exports.api = onRequest(app);
