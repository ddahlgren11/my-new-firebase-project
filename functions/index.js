// /**
//  * Import function triggers from their respective submodules:
//  *
//  * const {onCall} = require("firebase-functions/v2/https");
//  * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
//  *
//  * See a full list of supported triggers at https://firebase.google.com/docs/functions
//  */

// const {setGlobalOptions} = require("firebase-functions");
// const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// // For cost control, you can set the maximum number of containers that can be
// // running at the same time. This helps mitigate the impact of unexpected
// // traffic spikes by instead downgrading performance. This limit is a
// // per-function limit. You can override the limit for each function using the
// // `maxInstances` option in the function's options, e.g.
// // `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// // NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// // functions should each use functions.runWith({ maxInstances: 10 }) instead.
// // In the v1 API, each function can only serve one request per container, so
// // this will be the maximum concurrent request count.
// setGlobalOptions({ maxInstances: 10 });

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started

// // exports.helloWorld = onRequest((request, response) => {
// //    logger.info("Hello logs!", {structuredData: true});
// //    response.send("Hello from Firebase!");
// // });

// // exports.yourFunctionName = onRequest((req, res) => {
// //   console.log("Headers:", req.headers);
// //   res.send({ message: "Check your logs for headers" });
// // });

// const admin = require("firebase-admin");
// admin.initializeApp();

// async function getAuthUser(req) {
//   const authHeader = req.headers.authorization; // Find the 'authorization' header
//   if (authHeader && authHeader.startsWith('Bearer ')) {
//     const token = authHeader.split(' ')[1]; // Extract the token
//     logger.info("Found Authorization Token:", { token }); // Print the token
//     // TODO: use admin.auth().verifyIdToken(token) 
//     // The original TODO is commented out for now, focusing on the print request
//     return { message: "Token found and logged" }; 
//   }
//   return null;
// }

// exports.api = onRequest(async (request, response) => { // Made function async for potential future token verification
  
//   // CORS Headers Implementation (Moved from global scope into the function)
//   response.set("Access-Control-Allow-Origin", "http://localhost:5173");
//   response.set("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
//   response.set("Access-Control-Allow-Headers", "Authorization, Content-Type");

//   if (request.method === "OPTIONS") {
//     response.status(204).send("");
//     return;
//   }
  
//   // Call to log the token (as requested)
//   await getAuthUser(request);

//   const { method, path, body } = request;
//   logger.info("Incoming request", { method, path, body });

//   if (path === "/rooms") {
//     if (method === "GET") {
//       return response.status(200).json([
//         { id: "r_123", name: "Algebra Hour", mode: "pomodoro", inviteCode: "AB12CD" },
//         { id: "r_456", name: "Geometry Jam", mode: "deep", inviteCode: "XY34ZT" }
//       ]);
//     }
//     if (method === "POST") {
//       return response.status(201).json({
//         id: "r_789",
//         name: body.name || "New Room",
//         mode: body.mode || "pomodoro",
//         inviteCode: "ZZ99YY"
//       });
//     }
//   }


//   if (path.startsWith("/rooms/") && !path.includes("/participants") && !path.includes("/session") && !path.includes("/membership")) {
//     const roomId = path.split("/")[2]; 
//     if (method === "GET") {
//       return response.status(200).json({
//         id: roomId,
//         name: "Algebra Hour",
//         mode: "pomodoro",
//         inviteCode: "AB12CD"
//       });
//     }
//     if (method === "PATCH") {
//       return response.status(200).json({
//         id: roomId,
//         name: body.name || "Updated Room",
//         mode: body.mode || "pomodoro",
//         inviteCode: "AB12CD"
//       });
//     }
//     if (method === "DELETE") {
//       return response.status(204).send();
//     }
//   }


//   if (path.includes("/session") && method === "PATCH") {
//     if (body.action === "startWork") {
//       return response.status(200).json({
//         state: "running",
//         startedAt: new Date().toISOString(),
//         durationSec: body.durationSec || 1500
//       });
//     }
//     if (body.action === "stop") {
//       return response.status(200).json({
//         state: "idle",
//         startedAt: null,
//         durationSec: null
//       });
//     }
//     return response.status(400).json({ message: "Invalid action" });
//   }

//   // The OpenAPI spec uses /membership. I'll change the placeholder /participants to /membership
//   if (path.includes("/membership") && !path.split("/")[4] && method === "GET") {
//     return response.status(200).json([
//       { uid: "u_123", displayName: "Alice" },
//       { uid: "u_456", displayName: "Bob" }
//     ]);
//   }
//   if (path.includes("/membership") && !path.split("/")[4] && method === "POST") {
//     return response.status(201).json({
//       uid: "u_789",
//       displayName: "Charlie"
//     });
//   }


//   if (path.includes("/membership/") && method === "DELETE") {
//     return response.status(204).send();
//   }

//   return response.status(404).json({ message: "Unrecognized path." });
// });

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