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
  // Normal Vite local dev (using hardcoded config as requested)
  firebaseConfig = {
    apiKey: "AIzaSyC3w_aZojKeEp3llhJlKlVGj_rbOHAMhb0",
    authDomain: "my-new-firebase-project-94e22.firebaseapp.com",
    projectId: "my-new-firebase-project-94e22",
    storageBucket: "my-new-firebase-project-94e22.firebasestorage.app",
    messagingSenderId: "210118924526",
    appId: "1:210118924526:web:c88671740e8b13e1e7fbff",
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

// Connect to emulators in local dev.
if (
  location.hostname === "localhost" &&
  !isCanvasEnv &&
  authInstance &&
  dbInstance &&
  functionsInstance
) {
  const usingDemoKeys = firebaseConfig.apiKey === "demo-api-key";

  // Connect to Firestore and Functions (safe on localhost)
  connectFirestoreEmulator(dbInstance, "localhost", 8080);
  connectFunctionsEmulator(functionsInstance, "localhost", 5001);

  // If we are using the demo key, we MUST connect to auth emulator.
  // If we are using real keys, the user might prefer real Google Auth, so we leave it commented out by default unless usingDemoKeys is true.
  if (usingDemoKeys) {
    connectAuthEmulator(authInstance, "http://localhost:9099");
  } else {
    // Uncomment this if you want to force Auth emulator even with real keys
    // connectAuthEmulator(authInstance, "http://localhost:9099");
  }
}
