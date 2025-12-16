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
  membershipRepo,
  friendshipRepo,
  taskRepo,
  sessionParticipantRepo
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

  const rooms = await roomRepo.getRoomsForUser(userId);

  return rooms;
});

// =====================================================================
// syncUser
// =====================================================================
exports.syncUser = onCall(async (request) => {
  const userId = getUserId(request);
  logger.info("syncUser called", { userId });

  if (userId === "default_user") {
    // Cannot sync default user
    return { success: false };
  }

  // Check if user exists
  const existingUser = await userRepo.getUserById(userId);

  // Get auth data if available
  const authData = request.auth ? request.auth.token : {};
  const displayName = authData.name || (authData.email ? authData.email.split('@')[0] : "Guest");
  const avatarUrl = authData.picture || "";

  if (!existingUser) {
    // Create new user
    await userRepo.createUser({
      id: userId,
      displayName,
      email: authData.email || "",
      avatarUrl
    });
    logger.info("Created new user profile", { userId });
  } else {
    // Update existing user if needed (optional, but good for keeping profile fresh)
    // Only update if changed to save writes
    const updates = {};
    if (displayName && existingUser.displayName !== displayName) updates.displayName = displayName;
    if (avatarUrl && existingUser.avatarUrl !== avatarUrl) updates.avatarUrl = avatarUrl;

    if (Object.keys(updates).length > 0) {
      await userRepo.updateUser(userId, updates);
    }
  }

  return { success: true };
});

// =====================================================================
// getUserProfile
// =====================================================================
exports.getUserProfile = onCall(async (request) => {
  const userId = getUserId(request);
  logger.info("getUserProfile called", { userId });

  const user = await userRepo.getUserById(userId);
  if (!user) {
    throw new HttpsError("not-found", "User profile not found.");
  }

  return user;
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

  // Verify membership
  const members = await membershipRepo.getMembers(roomId);
  const isMember = members.some(m => m.userId === userId);
  if (!isMember) {
    throw new HttpsError("permission-denied", "You must be a member of the room to start a session.");
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

  // Add creator as participant
  await sessionParticipantRepo.addParticipant({
    sessionId: newSession.id,
    userId: userId
  });

  return newSession;
});

// =====================================================================
// joinSession
// =====================================================================
exports.joinSession = onCall(async (request) => {
  const userId = getUserId(request);
  const { sessionId } = request.data;

  logger.info("joinSession called", { userId, sessionId });

  if (!sessionId) {
    throw new HttpsError("invalid-argument", "The function must be called with a 'sessionId' argument.");
  }

  const session = await sessionRepo.getSessionById(sessionId);
  if (!session) {
    throw new HttpsError("not-found", "Session not found.");
  }

  // Verify session is active
  const now = Date.now();
  const endTime = session.endTime || (session.startTime + session.durationMinutes * 60 * 1000);
  if (session.endTime || now > endTime) {
      throw new HttpsError("failed-precondition", "Session has ended.");
  }

  // Verify membership of room
  const members = await membershipRepo.getMembers(session.roomId);
  const isMember = members.some(m => m.userId === userId);
  if (!isMember) {
    throw new HttpsError("permission-denied", "You must be a member of the room to join its session.");
  }

  await sessionParticipantRepo.addParticipant({
    sessionId,
    userId
  });

  return { success: true };
});

// =====================================================================
// leaveSession
// =====================================================================
exports.leaveSession = onCall(async (request) => {
  const userId = getUserId(request);
  const { sessionId } = request.data;

  logger.info("leaveSession called", { userId, sessionId });

  if (!sessionId) {
    throw new HttpsError("invalid-argument", "The function must be called with a 'sessionId' argument.");
  }

  // Remove participant
  await sessionParticipantRepo.removeParticipant(sessionId, userId);

  // Check remaining participants
  const participants = await sessionParticipantRepo.getParticipants(sessionId);

  if (participants.length === 0) {
    logger.info("Session empty, ending session", { sessionId });
    await sessionRepo.updateSession(sessionId, {
      endTime: Date.now()
    });
  }

  return { success: true };
});

// =====================================================================
// getSessionDetails
// =====================================================================
exports.getSessionDetails = onCall(async (request) => {
  const userId = getUserId(request);
  const { sessionId } = request.data;

  if (!sessionId) {
    throw new HttpsError("invalid-argument", "Must provide sessionId.");
  }

  const session = await sessionRepo.getSessionById(sessionId);
  if (!session) throw new HttpsError("not-found", "Session not found.");

  // Check room membership
  const members = await membershipRepo.getMembers(session.roomId);
  if (!members.some(m => m.userId === userId)) {
    throw new HttpsError("permission-denied", "Not a room member.");
  }

  const participants = await sessionParticipantRepo.getParticipants(sessionId);

  // Enrich participants with user info
  const users = await Promise.all(participants.map(async p => {
    const user = await userRepo.getUserById(p.userId);
    return {
      userId: p.userId,
      displayName: user ? user.displayName : "Unknown",
      avatarUrl: user ? user.avatarUrl : ""
    };
  }));

  return {
    session,
    participants: users
  };
});

// =====================================================================
// getSessions
// =====================================================================
exports.getSessions = onCall(async (request) => {
  const userId = getUserId(request);
  const { roomId } = request.data;

  logger.info("getSessions called", { userId, roomId });

  if (!roomId) {
    throw new HttpsError("invalid-argument", "The function must be called with a 'roomId' argument.");
  }

  // Verify membership
  const members = await membershipRepo.getMembers(roomId);
  const isMember = members.some(m => m.userId === userId);
  if (!isMember) {
    throw new HttpsError("permission-denied", "You must be a member of the room to view sessions.");
  }

  const sessions = await sessionRepo.getSessionsForRoom(roomId);
  return sessions;
});

// =====================================================================
// addFriend
// =====================================================================
exports.addFriend = onCall(async (request) => {
  const userId = getUserId(request);
  const { friendCode, username, targetUserId } = request.data;

  logger.info("addFriend called", { userId, friendCode, username, targetUserId });

  if (!friendCode && !username && !targetUserId) {
    throw new HttpsError("invalid-argument", "Must provide friendCode, username, or targetUserId.");
  }

  let targetUser = null;

  if (targetUserId) {
    // Direct add by ID (e.g. from suggestions)
    targetUser = await userRepo.getUserById(targetUserId);
  } else if (friendCode) {
    // Search by friendCode
    const snap = await userRepo.collection.where("friendCode", "==", friendCode).limit(1).get();
    if (!snap.empty) {
      targetUser = snap.docs[0].data();
    }
  } else if (username) {
    // Exact match for username (displayName)
    // Note: displayName is not unique, this picks the first one found.
    const snap = await userRepo.collection.where("displayName", "==", username).limit(1).get();
    if (!snap.empty) {
      targetUser = snap.docs[0].data();
    }
  }

  if (!targetUser) {
    throw new HttpsError("not-found", "User not found.");
  }

  if (targetUser.id === userId) {
    throw new HttpsError("invalid-argument", "You cannot add yourself as a friend.");
  }

  // Check if already friends
  const areFriends = await friendshipRepo.areFriends(userId, targetUser.id);
  if (areFriends) {
    throw new HttpsError("already-exists", "You are already friends with this user.");
  }

  // Create friendship
  const friendship = await friendshipRepo.createFriendship({
    userId1: userId,
    userId2: targetUser.id,
    status: "accepted" // Auto-accept for now
  });

  return { message: "Friend added", friend: targetUser };
});

// =====================================================================
// getFriends
// =====================================================================
exports.getFriends = onCall(async (request) => {
  const userId = getUserId(request);
  logger.info("getFriends called", { userId });

  const friendships = await friendshipRepo.getFriendshipsForUser(userId);

  // Extract friend IDs
  const friendIds = friendships.map(f => f.userId1 === userId ? f.userId2 : f.userId1);

  if (friendIds.length === 0) {
    return [];
  }

  // Fetch user details for friends
  // Note: Parallel fetch is better
  const friends = await Promise.all(friendIds.map(async (fid) => {
    const user = await userRepo.getUserById(fid);
    if (!user) return null;

    // TODO: Determine real status (in-session, online, etc.)
    // For now, check if they have an active session
    const sessions = await sessionRepo.getSessionsForUser(fid);
    const activeSession = sessions.find(s => !s.endTime); // Assuming endTime null means active, or check timestamp
    // Actually our schema has durationMinutes and startTime, endTime is null usually until finished?
    // Logic for active: startTime + duration > now.

    let status = "offline";
    if (activeSession) {
       const elapsed = (Date.now() - activeSession.startTime) / 60000;
       if (elapsed < activeSession.durationMinutes) {
         status = "in-session";
       }
    }

    return {
      id: user.id,
      name: user.displayName,
      avatarUrl: user.avatarUrl,
      status: status
    };
  }));

  return friends.filter(f => f !== null);
});

// =====================================================================
// getSuggestedFriends
// =====================================================================
exports.getSuggestedFriends = onCall(async (request) => {
  const userId = getUserId(request);
  logger.info("getSuggestedFriends called", { userId });

  // 1. Get user's rooms
  const myRooms = await roomRepo.getRoomsForUser(userId);
  if (myRooms.length === 0) return [];

  // 2. Get members of those rooms
  const suggestedUserIds = new Set();

  for (const room of myRooms) {
    const members = await membershipRepo.getMembers(room.id);
    for (const m of members) {
      if (m.userId !== userId) {
        suggestedUserIds.add(m.userId);
      }
    }
  }

  // 3. Filter out existing friends
  const friendships = await friendshipRepo.getFriendshipsForUser(userId);
  const friendIds = new Set(friendships.map(f => f.userId1 === userId ? f.userId2 : f.userId1));

  const candidateIds = [...suggestedUserIds].filter(uid => !friendIds.has(uid));

  // Limit suggestions
  const limit = 5;
  const limitedIds = candidateIds.slice(0, limit);

  // 4. Fetch details
  const suggestions = await Promise.all(limitedIds.map(async (uid) => {
    const user = await userRepo.getUserById(uid);
    return user ? {
      id: user.id,
      name: user.displayName,
      avatarUrl: user.avatarUrl,
      // Find a common room name to show "From Room X"
      // Optimization: we could track which room we found them in during step 2
    } : null;
  }));

  return suggestions.filter(u => u !== null);
});

// =====================================================================
// createTask
// =====================================================================
exports.createTask = onCall(async (request) => {
  const userId = getUserId(request);
  const { title, roomId } = request.data;

  logger.info("createTask called", { userId, title });

  if (!title) {
    throw new HttpsError("invalid-argument", "The function must be called with a 'title' argument.");
  }

  if (roomId) {
    // Verify membership if roomId is provided
    const members = await membershipRepo.getMembers(roomId);
    const isMember = members.some(m => m.userId === userId);
    if (!isMember) {
      throw new HttpsError("permission-denied", "You must be a member of the room to create a task in it.");
    }
  }

  const newTask = await taskRepo.createTask({
    userId,
    roomId: roomId || null,
    title,
    completed: false
  });

  return newTask;
});

// =====================================================================
// getTasks
// =====================================================================
exports.getTasks = onCall(async (request) => {
  const userId = getUserId(request);
  const { roomId, includeAllUsers } = request.data || {};

  logger.info("getTasks called", { userId, roomId, includeAllUsers });

  // Use room filtering at DB level if room provided
  let tasks;
  if (roomId) {
    if (includeAllUsers) {
      // Check membership first
      const members = await membershipRepo.getMembers(roomId);
      const isMember = members.some(m => m.userId === userId);
      if (!isMember) {
        throw new HttpsError("permission-denied", "Not a member of this room.");
      }
      tasks = await taskRepo.getAllTasksForRoom(roomId);

      // Enrich with user info for shared view
      // Optimization: batch fetch unique user IDs
      const uniqueUserIds = [...new Set(tasks.map(t => t.userId))];
      const userMap = {};
      await Promise.all(uniqueUserIds.map(async uid => {
        const u = await userRepo.getUserById(uid);
        if (u) userMap[uid] = u;
      }));

      tasks = tasks.map(t => ({
        ...t,
        user: userMap[t.userId] ? {
            displayName: userMap[t.userId].displayName,
            avatarUrl: userMap[t.userId].avatarUrl
        } : null
      }));

    } else {
      tasks = await taskRepo.getTasksForRoom(userId, roomId);
    }
  } else {
    tasks = await taskRepo.getTasksForUser(userId);
  }

  // Sort by created time
  tasks.sort((a, b) => b.createdAt - a.createdAt);

  return tasks;
});

// =====================================================================
// updateTask
// =====================================================================
exports.updateTask = onCall(async (request) => {
  const userId = getUserId(request);
  const { taskId, completed } = request.data;

  logger.info("updateTask called", { userId, taskId, completed });

  const task = await taskRepo.getTaskById(taskId);
  if (!task) {
    throw new HttpsError("not-found", "Task not found");
  }

  if (task.userId !== userId) {
    throw new HttpsError("permission-denied", "You can only update your own tasks");
  }

  const updatedTask = await taskRepo.updateTask(taskId, {
    completed,
    completedAt: completed ? Date.now() : null
  });

  return updatedTask;
});

// =====================================================================
// sendNudge
// =====================================================================
exports.sendNudge = onCall(async (request) => {
  const userId = getUserId(request);
  const { friendId } = request.data;

  logger.info("sendNudge called", { userId, friendId });

  // In a real implementation, this would send a push notification or store a notification record.
  // For now, we verify the user exists and return success.
  const friend = await userRepo.getUserById(friendId);
  if (!friend) {
      throw new HttpsError("not-found", "Friend user not found");
  }

  return { success: true, message: `Nudged ${friend.displayName}!` };
});
