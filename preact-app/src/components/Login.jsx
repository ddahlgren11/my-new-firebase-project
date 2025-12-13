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
      <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-4">
        <div class="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md flex flex-col items-center space-y-6">
            <h2 class="text-3xl font-extrabold text-center text-gray-900">Procrastinot</h2>
            <p class="text-gray-500 text-center text-lg">Focus on what matters.</p>

            <button
            onClick={handleGoogleLogin}
            class="flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md transition-all duration-200"
            >
            <svg class="w-5 h-5 mr-3" aria-hidden="true" viewBox="0 0 24 24">
                <path fill="currentColor" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12.61C5,8.85 8.38,5.78 12.23,5.78C14.01,5.78 15.65,6.38 16.95,7.56L19.23,5.29C17.31,3.53 14.94,2.5 12.23,2.5C6.5,2.5 2,6.81 2,12.61C2,18.39 6.5,22.72 12.23,22.72C20.66,22.72 22.03,15.28 21.35,11.1Z" />
            </svg>
            Sign in with Google
            </button>

            {error && (
                <div class="w-full bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="ml-3">
                            <p class="text-sm text-red-700 font-bold">{error.message}</p>
                            <p class="text-xs text-red-600 mt-1">{error.details || error.message}</p>
                            {error.type === 'unauthorized-domain' && window.location.hostname === '0.0.0.0' && (
                                <button
                                    onClick={() => {
                                        const url = new URL(window.location.href);
                                        url.hostname = 'localhost';
                                        window.location.href = url.toString();
                                    }}
                                    class="mt-2 w-full bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700 shadow-sm transition-colors"
                                >
                                    Switch to localhost
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
      </div>
    );
  }

  return (
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div class="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center space-y-4 max-w-sm w-full">
        {user.photoURL ? (
            <img src={user.photoURL} alt="Profile" class="rounded-full w-24 h-24 border-4 border-blue-100 shadow-sm" />
        ) : (
            <div class="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl font-bold">
                {user.displayName ? user.displayName[0] : (user.email ? user.email[0] : '?')}
            </div>
        )}
        <div class="text-center">
            <p class="text-xl font-bold text-gray-800">Welcome back,</p>
            <p class="text-lg text-gray-600">{user.displayName || user.email}</p>
        </div>
        <button
            onClick={handleLogout}
            class="w-full bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors shadow-md"
        >
            Sign Out
        </button>
      </div>
    </div>
  );
}
