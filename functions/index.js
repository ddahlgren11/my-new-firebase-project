/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {setGlobalOptions} = require("firebase-functions");
const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({ maxInstances: 10 });

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//    logger.info("Hello logs!", {structuredData: true});
//    response.send("Hello from Firebase!");
// });

// exports.yourFunctionName = onRequest((req, res) => {
//   console.log("Headers:", req.headers);
//   res.send({ message: "Check your logs for headers" });
// });

const admin = require("firebase-admin");
admin.initializeApp();

async function getAuthUser(req) {
  const authHeader = req.headers.authorization; // Find the 'authorization' header
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1]; // Extract the token
    logger.info("Found Authorization Token:", { token }); // Print the token
    // TODO: use admin.auth().verifyIdToken(token) 
    // The original TODO is commented out for now, focusing on the print request
    return { message: "Token found and logged" }; 
  }
  return null;
}

exports.api = onRequest(async (request, response) => { // Made function async for potential future token verification
  
  // CORS Headers Implementation (Moved from global scope into the function)
  response.set("Access-Control-Allow-Origin", "http://localhost:5173");
  response.set("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  response.set("Access-Control-Allow-Headers", "Authorization, Content-Type");

  if (request.method === "OPTIONS") {
    response.status(204).send("");
    return;
  }
  
  // Call to log the token (as requested)
  await getAuthUser(request);

  const { method, path, body } = request;
  logger.info("Incoming request", { method, path, body });

  if (path === "/rooms") {
    if (method === "GET") {
      return response.status(200).json([
        { id: "r_123", name: "Algebra Hour", mode: "pomodoro", inviteCode: "AB12CD" },
        { id: "r_456", name: "Geometry Jam", mode: "deep", inviteCode: "XY34ZT" }
      ]);
    }
    if (method === "POST") {
      return response.status(201).json({
        id: "r_789",
        name: body.name || "New Room",
        mode: body.mode || "pomodoro",
        inviteCode: "ZZ99YY"
      });
    }
  }


  if (path.startsWith("/rooms/") && !path.includes("/participants") && !path.includes("/session") && !path.includes("/membership")) {
    const roomId = path.split("/")[2]; 
    if (method === "GET") {
      return response.status(200).json({
        id: roomId,
        name: "Algebra Hour",
        mode: "pomodoro",
        inviteCode: "AB12CD"
      });
    }
    if (method === "PATCH") {
      return response.status(200).json({
        id: roomId,
        name: body.name || "Updated Room",
        mode: body.mode || "pomodoro",
        inviteCode: "AB12CD"
      });
    }
    if (method === "DELETE") {
      return response.status(204).send();
    }
  }


  if (path.includes("/session") && method === "PATCH") {
    if (body.action === "startWork") {
      return response.status(200).json({
        state: "running",
        startedAt: new Date().toISOString(),
        durationSec: body.durationSec || 1500
      });
    }
    if (body.action === "stop") {
      return response.status(200).json({
        state: "idle",
        startedAt: null,
        durationSec: null
      });
    }
    return response.status(400).json({ message: "Invalid action" });
  }

  // The OpenAPI spec uses /membership. I'll change the placeholder /participants to /membership
  if (path.includes("/membership") && !path.split("/")[4] && method === "GET") {
    return response.status(200).json([
      { uid: "u_123", displayName: "Alice" },
      { uid: "u_456", displayName: "Bob" }
    ]);
  }
  if (path.includes("/membership") && !path.split("/")[4] && method === "POST") {
    return response.status(201).json({
      uid: "u_789",
      displayName: "Charlie"
    });
  }


  if (path.includes("/membership/") && method === "DELETE") {
    return response.status(204).send();
  }

  return response.status(404).json({ message: "Unrecognized path." });
});