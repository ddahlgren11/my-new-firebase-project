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
