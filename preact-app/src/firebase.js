import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getAuth, connectAuthEmulator } from "firebase/auth";


// TODO: Replace with your web app's Firebase configuration.
// You can get this from the Firebase console, or by running:
// firebase apps:sdkconfig WEB <your-app-id>
const firebaseConfig = {
  apiKey: "AIzaSyC3w_aZojKeEp3llhJlKlVGj_rbOHAMhb0",
  authDomain: "my-new-firebase-project-94e22.firebaseapp.com",
  projectId: "my-new-firebase-project-94e22",
  storageBucket: "my-new-firebase-project-94e22.firebasestorage.app",
  messagingSenderId: "210118924526",
  appId: "1:210118924526:web:c88671740e8b13e1e7fbff"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const functions = getFunctions(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Connect to emulators if running locally
if (window.location.hostname === "localhost") {
  console.log("Development mode: Connecting to local Firebase emulators...");
  connectFirestoreEmulator(db, 'localhost', 8080);
  connectFunctionsEmulator(functions, 'localhost', 5001);
  connectAuthEmulator(auth, 'http://localhost:9099');
} else {
  console.log("Production mode: Connecting to live Firebase services.");
}

export { app, db, functions, auth, googleProvider};
  