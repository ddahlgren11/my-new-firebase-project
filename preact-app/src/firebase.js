// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { 
//     getAuth, 
//     GoogleAuthProvider, 
//     connectAuthEmulator,
//     signInWithCustomToken,
//     signInAnonymously
// } from "firebase/auth";
// import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
// import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

// // --- CUSTOM CANVAS CONFIGURATION AND AUTHENTICATION ---

// // 1. Load configuration from the global variable provided by the platform
// const firebaseConfig = JSON.parse(
//     typeof __firebase_config !== 'undefined' ? __firebase_config : '{}'
// );

// // 2. Load the mandatory authentication token
// const authToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

// let app = null;
// let authInstance = null;
// let dbInstance = null;
// let functionsInstance = null;

// if (firebaseConfig && firebaseConfig.apiKey) {
//     // Initialize Firebase
//     app = initializeApp(firebaseConfig);
//     authInstance = getAuth(app);
//     dbInstance = getFirestore(app);
//     functionsInstance = getFunctions(app);

//     // 3. MANDATORY: Authenticate the user immediately using the provided token.
//     const authenticate = async () => {
//         // This is safe because we check for authInstance before calling this function
//         try {
//             if (authToken) {
//                 await signInWithCustomToken(authInstance, authToken);
//                 console.log("Firebase: Signed in with custom token. App should now load.");
//             } else {
//                 await signInAnonymously(authInstance);
//                 console.warn("Firebase: Signed in anonymously (no custom token provided).");
//             }
//         } catch (error) {
//             console.error("Firebase Authentication Failed:", error);
//         }
//     };
    
//     // Run authentication only if authInstance was successfully created
//     if (authInstance) {
//         authenticate();
//     }

// } else {
//     // This message should only appear if the environment fails to provide the config.
//     // However, we prevent the app from crashing by exporting null instances below.
//     console.error("Firebase initialization failed: Configuration (apiKey) is missing.");
// }

// // --- END CUSTOM CONFIGURATION ---


// // Export null if initialization failed, preventing the "Cannot read properties of undefined" crash
// export const auth = authInstance;
// export const googleProvider = new GoogleAuthProvider();
// export const db = dbInstance;
// export const functions = functionsInstance;

// // Connect to emulators if running locally (logic retained for standard local development)
// if (location.hostname === "localhost" && authInstance && dbInstance && functionsInstance) {
//   connectAuthEmulator(authInstance, "http://localhost:9099");
//   connectFirestoreEmulator(dbInstance, "localhost", 8080);
//   connectFunctionsEmulator(functionsInstance, "localhost", 5001);
// }

// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  connectAuthEmulator,
  signInWithCustomToken,
  signInAnonymously,
} from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

// Detect if we're in the special canvas environment
const isCanvasEnv = typeof __firebase_config !== "undefined";

let firebaseConfig;
let authToken = null;

if (isCanvasEnv) {
  // Config + token provided by host platform
  firebaseConfig = JSON.parse(__firebase_config);
  authToken =
    typeof __initial_auth_token !== "undefined" ? __initial_auth_token : null;
} else {
  // Normal Vite local dev (put your Firebase config in .env.*)
  firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    // add storageBucket, messagingSenderId, etc. if you need them
  };
}

let app = null;
let authInstance = null;
let dbInstance = null;
let functionsInstance = null;

if (firebaseConfig && firebaseConfig.apiKey) {
  app = initializeApp(firebaseConfig);
  authInstance = getAuth(app);
  dbInstance = getFirestore(app);
  functionsInstance = getFunctions(app);

  if (isCanvasEnv) {
    // Only do the custom/anonymous auto-auth in canvas mode
    const authenticate = async () => {
      try {
        if (authToken) {
          await signInWithCustomToken(authInstance, authToken);
          console.log("Firebase: Signed in with custom token.");
        } else {
          await signInAnonymously(authInstance);
          console.warn("Firebase: Signed in anonymously (no custom token).");
        }
      } catch (error) {
        console.error("Firebase Authentication Failed:", error);
      }
    };
    authenticate();
  }
} else {
  console.error(
    "Firebase initialization failed: Configuration (apiKey) is missing."
  );
}

// Export instances
export const auth = authInstance;
export const googleProvider = new GoogleAuthProvider();
export const db = dbInstance;
export const functions = functionsInstance;

// Optional: connect to emulators in local dev.
// If you're using real Google login, you may want to DISABLE auth emulator for now.
if (
  location.hostname === "localhost" &&
  !isCanvasEnv &&
  authInstance &&
  dbInstance &&
  functionsInstance
) {
  // Comment this out if Google sign-in gives you trouble with the emulator:
  // connectAuthEmulator(authInstance, "http://localhost:9099");
  connectFirestoreEmulator(dbInstance, "localhost", 8080);
  connectFunctionsEmulator(functionsInstance, "localhost", 5001);
}