import { useState, useEffect } from 'preact/hooks';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { Login } from './components/Login';
import { RoomList } from './components/RoomList';

export function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
      {user ? <RoomList user={user} /> : <Login />}
    </main>
  );
}
