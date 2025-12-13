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
  // Normal Vite local dev.
  // We prioritize environment variables, but fallback to the user's provided keys if missing.
  const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;

  if (apiKey) {
    firebaseConfig = {
      apiKey: apiKey,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
    };
  } else {
    // User provided keys for local development
    firebaseConfig = {
      apiKey: "AIzaSyC3w_aZojKeEp3llhJlKlVGj_rbOHAMhb0",
      authDomain: "my-new-firebase-project-94e22.firebaseapp.com",
      projectId: "my-new-firebase-project-94e22",
      storageBucket: "my-new-firebase-project-94e22.firebasestorage.app",
      messagingSenderId: "210118924526",
      appId: "1:210118924526:web:c88671740e8b13e1e7fbff",
    };
  }
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
  // Check if we are using the "demo" keys (legacy) or real keys
  // Since we hardcoded real keys above, we are likely using real keys if env vars are missing.
  // Typically, if using real keys, we want to hit the real Auth service for Google Login.
  // But we might still want to use Firestore/Functions emulators if running locally.

  // Uncomment the following lines ONLY if you are running `firebase emulators:start`
  // and want your localhost app to talk to them instead of the cloud.

  // connectFirestoreEmulator(dbInstance, "localhost", 8080);
  // connectFunctionsEmulator(functionsInstance, "localhost", 5001);
  // connectAuthEmulator(authInstance, "http://localhost:9099");

  console.log("Firebase: Running locally. Emulators are NOT connected by default to ensure Google Login works with real keys.");
}
