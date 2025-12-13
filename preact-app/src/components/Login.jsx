import { useState, useEffect } from "preact/hooks";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

export function Login() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  async function handleGoogleLogin() {
    setError(null);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error("Login failed:", err);
      if (err.code === 'auth/unauthorized-domain') {
        const isIp = window.location.hostname === '0.0.0.0';
        setError({
          type: 'unauthorized-domain',
          message: "Login failed: Domain not authorized.",
          details: isIp
            ? "Firebase does not allow OAuth on 0.0.0.0. Please use localhost."
            : `Add "${window.location.hostname}" to Authorized Domains in Firebase Console.`
        });
      } else {
        setError({ message: err.message });
      }
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

        {error && (
            <div class="mt-4 p-4 bg-red-100 text-red-700 rounded max-w-md text-center border border-red-200">
                <p class="font-bold">{error.message}</p>
                <p class="text-sm mt-1">{error.details || error.message}</p>
                {error.type === 'unauthorized-domain' && window.location.hostname === '0.0.0.0' && (
                    <button
                        onClick={() => {
                            const url = new URL(window.location.href);
                            url.hostname = 'localhost';
                            window.location.href = url.toString();
                        }}
                        class="mt-3 bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700 shadow-sm"
                    >
                        Switch to localhost
                    </button>
                )}
            </div>
        )}
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
