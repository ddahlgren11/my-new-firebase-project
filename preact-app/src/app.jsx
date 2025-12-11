import { useState, useEffect } from 'preact/hooks';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { Login } from './components/Login';
import { RoomsPage } from './components/RoomsPage';
import { Nav } from './components/Nav';
import { FriendsPage } from './components/FriendsPage';
import { AccountabilityPage } from './components/AccountabilityPage';

export function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState('rooms');

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
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Or a spinner component
  }

  return (
    <main>
      {user ? (
        <div>
          <Nav activePage={activePage} setActivePage={setActivePage} />
          {activePage === 'rooms' && <RoomsPage user={user} />}
          {activePage === 'friends' && <FriendsPage user={user} />}
          {activePage === 'accountability' && <AccountabilityPage user={user} />}
        </div>
      ) : (
        <Login />
      )}
    </main>
  );
}