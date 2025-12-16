import { useState, useEffect } from 'preact/hooks';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { Login } from './components/Login';
import { RoomsPage } from './components/RoomsPage';
import { Nav } from './components/Nav';
import { FriendsPage } from './components/FriendsPage';
import { AccountabilityPage } from './components/AccountabilityPage';
import { Dashboard } from './components/Dashboard';
import { api } from './api';

export function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState('dashboard');

  useEffect(() => {
    // 🛑 CRITICAL FIX: Check if the 'auth' instance is available before subscribing.
    if (!auth) {
        console.error("Firebase Auth instance is null. Skipping authentication listeners.");
        // Set loading to false so the app can show the Login screen or an error.
        setLoading(false);
        // We return an empty cleanup function since no subscription was made.
        return () => {};
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        // Sync user profile to Firestore so friends/rooms work correctly
        api.syncUser();
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div class="min-h-screen flex items-center justify-center bg-gray-900 text-white">Loading...</div>;
  }

  return (
    <main class="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {user ? (
        <div class="flex flex-col min-h-screen">
          <Nav activePage={activePage} setActivePage={setActivePage} />
          <div class="flex-grow">
            {activePage === 'dashboard' && <Dashboard setActivePage={setActivePage} />}
            {activePage === 'rooms' && <RoomsPage user={user} />}
            {activePage === 'friends' && <FriendsPage user={user} />}
            {activePage === 'accountability' && <AccountabilityPage user={user} />}
          </div>
        </div>
      ) : (
        <Login />
      )}
    </main>
  );
}
