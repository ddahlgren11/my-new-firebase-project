import { useState, useEffect } from "preact/hooks";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

export function Login() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  async function handleGoogleLogin() {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error("Login failed:", err.message);
    }
  }

  async function handleLogout() {
    await signOut(auth);
  }

  if (!user) {
    return (
      <div class="flex flex-col items-center justify-center h-screen space-y-4">
        <h2 class="text-2xl font-bold">Welcome to Procrastinot</h2>
        <button
          onClick={handleGoogleLogin}
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Sign in with Google
        </button>
      </div>
    );
  }

  return (
    <div class="flex flex-col items-center justify-center h-screen space-y-4">
      {user.photoURL && (
        <img src={user.photoURL} alt="Profile" class="rounded-full w-16 h-16" />
      )}
      <p class="text-lg">Hello, {user.displayName || user.email}!</p>
      <button
        onClick={handleLogout}
        class="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        Sign Out
      </button>
    </div>
  );
}