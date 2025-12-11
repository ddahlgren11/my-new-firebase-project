/**
 * Firebase Functions v2 HTTPS API for Procrastinot
 * Implementing endpoints from the OpenAPI 3.0.3 spec you provided.
 */

const { setGlobalOptions } = require("firebase-functions");
const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");

admin.initializeApp();
setGlobalOptions({ maxInstances: 10 });

// --- Helpers --------------------------------------------------

async function getAuthUser(req) {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];
    logger.info("Found Authorization Token:", { token });
    // TODO: use admin.auth().verifyIdToken(token)
    return { message: "Token found and logged" };
  }
  return null;
}

function generateId(prefix) {
  return `${prefix}_${Math.random().toString(36).slice(2, 9)}`;
}

// --- Main API Function ----------------------------------------

exports.api = onRequest(async (request, response) => {
  // CORS
  response.set("Access-Control-Allow-Origin", "http://localhost:5173");
  response.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  response.set("Access-Control-Allow-Headers", "Authorization, Content-Type");

  if (request.method === "OPTIONS") {
    response.status(204).send("");
    return;
  }

  // Log / auth
  await getAuthUser(request);

  const { method, body } = request;
  const path = request.path || "/";
  const segments = path.split("/").filter(Boolean); // e.g. "/rooms/abc" -> ["rooms","abc"]

  logger.info("Incoming request", { method, path, body, segments });

  // =====================================================================
  // POST /rooms  (Create a Room)
  // =====================================================================
  if (method === "POST" && segments.length === 1 && segments[0] === "rooms") {
    const { name, description, users } = body || {};

    if (!name) {
      return response.status(400).json({ message: "Missing required field: name" });
    }

    const roomId = generateId("room");
    const room = {
      roomId,
      name,
      description: description || "",
      users: Array.isArray(users) ? users : [],
      owner: "owner_default", // stub owner
      inviteCode: "INV" + Math.random().toString(36).slice(2, 6).toUpperCase()
    };

    return response.status(201).json(room);
  }

  // =====================================================================
  // POST /rooms/{roomId}/memberships  (Join a Room)
  // =====================================================================
  if (
    method === "POST" &&
    segments.length === 3 &&
    segments[0] === "rooms" &&
    segments[2] === "memberships"
  ) {
    const roomId = segments[1];
    const { inviteCode } = body || {};

    if (!inviteCode) {
      return response.status(400).json({ message: "Missing inviteCode" });
    }

    // Stub success path
    const room = {
      roomId,
      name: "Sample Room",
      description: "Joined via invite code",
      users: ["user_123", "user_456"],
      owner: "user_123",
      inviteCode
    };

    return response.status(200).json(room);
  }

  // =====================================================================
  // GET /users/{userId}/rooms  (List Rooms a User Is In)
  // =====================================================================
  if (
    method === "GET" &&
    segments.length === 3 &&
    segments[0] === "users" &&
    segments[2] === "rooms"
  ) {
    const userId = segments[1];

    // Stub: pretend user exists and is in two rooms
    const rooms = [
      {
        roomId: "room_1",
        name: "Morning Focus",
        description: "Get work done before noon",
        users: [userId, "friend_1"],
        owner: userId,
        inviteCode: "AB12CD"
      },
      {
        roomId: "room_2",
        name: "Night Owls",
        description: "Late-night study session",
        users: [userId, "friend_2"],
        owner: "friend_2",
        inviteCode: "EF34GH"
      }
    ];

    return response.status(200).json(rooms);
  }

  // =====================================================================
  // POST /rooms/{roomId}/sessions  (Start a Session)
  // =====================================================================
  if (
    method === "POST" &&
    segments.length === 3 &&
    segments[0] === "rooms" &&
    segments[2] === "sessions"
  ) {
    const roomId = segments[1];
    const { owner, name, startTime, mode, duration, description } = body || {};

    if (!owner || !name || !startTime || !mode || typeof duration !== "number") {
      return response.status(400).json({
        message:
          "Missing required fields: owner, name, startTime, mode, duration"
      });
    }

    const sessionId = generateId("session");
    const session = {
      sessionId,
      owner,
      name,
      startTime,
      mode,
      duration,
      description: description || ""
    };

    // In a real impl, you’d store roomId + sessionId mapping in Firestore
    logger.info("Session created for room", { roomId, session });

    return response.status(201).json(session);
  }

  // =====================================================================
  // POST /rooms/{roomId}/sessions/{sessionId}/users  (Join a Session)
  // =====================================================================
  if (
    method === "POST" &&
    segments.length === 5 &&
    segments[0] === "rooms" &&
    segments[2] === "sessions" &&
    segments[4] === "users"
  ) {
    const roomId = segments[1];
    const sessionId = segments[3];
    const { tasks } = body || {};

    // tasks is optional in spec, we'll just convert to TaskList
    const taskList = {
      tasks: Array.isArray(tasks)
        ? tasks.map((name) => ({
            taskId: generateId("task"),
            name,
            complete: false
          }))
        : []
    };

    logger.info("User joined session", { roomId, sessionId, taskList });

    return response.status(200).json(taskList);
  }

  // =====================================================================
  // PATCH /rooms/{roomId}/sessions/{sessionId}/users/{userId}
  //      (Update User Progress in Session)
  // =====================================================================
  if (
    method === "PATCH" &&
    segments.length === 6 &&
    segments[0] === "rooms" &&
    segments[2] === "sessions" &&
    segments[4] === "users"
  ) {
    const roomId = segments[1];
    const sessionId = segments[3];
    const userId = segments[5];
    const { tasks } = body || {};

    if (!Array.isArray(tasks)) {
      return response.status(400).json({ message: "tasks must be an array" });
    }

    // Basic validation to match TaskList schema
    for (const t of tasks) {
      if (
        !t ||
        typeof t.taskId !== "string" ||
        typeof t.name !== "string" ||
        typeof t.complete !== "boolean"
      ) {
        return response.status(400).json({
          message: "Each task must have taskId (string), name (string), complete (boolean)"
        });
      }
    }

    const updatedTaskList = { tasks };

    logger.info("Updated user progress", {
      roomId,
      sessionId,
      userId,
      updatedTaskList
    });

    return response.status(200).json(updatedTaskList);
  }

  // =====================================================================
  // GET /rooms/{roomId}/sessions/{sessionId}  (Get Session Status)
  // =====================================================================
  if (
    method === "GET" &&
    segments.length === 4 &&
    segments[0] === "rooms" &&
    segments[2] === "sessions"
  ) {
    const roomId = segments[1];
    const sessionId = segments[3];

    // Stub SessionWithUsers
    const session = {
      sessionId,
      owner: "owner_123",
      name: "Deep Work Block",
      startTime: new Date().toISOString(),
      mode: "deep_work",
      duration: 90,
      description: `Session in room ${roomId}`
    };

    const users = [
      { userId: "user_1", displayName: "Alice" },
      { userId: "user_2", displayName: "Bob" }
    ];

    return response.status(200).json({ session, users });
  }

  // =====================================================================
  // GET /users/{userId}/friends  (List Friends)
  // =====================================================================
  if (
    method === "GET" &&
    segments.length === 3 &&
    segments[0] === "users" &&
    segments[2] === "friends"
  ) {
    const userId = segments[1];

    // Stub UserFriend list
    const friends = [
      {
        name: "Alice",
        status: "online",
        activeSessions: [
          {
            sessionId: "session_a",
            owner: userId,
            name: "Morning Grind",
            startTime: new Date().toISOString(),
            mode: "pomodoro",
            duration: 50,
            description: "Short focus sprint"
          }
        ]
      },
      {
        name: "Bob",
        status: "offline",
        activeSessions: []
      }
    ];

    return response.status(200).json(friends);
  }

  // =====================================================================
  // Fallback - Unknown route
  // =====================================================================
  return response.status(404).json({ message: "Unrecognized path." });
});