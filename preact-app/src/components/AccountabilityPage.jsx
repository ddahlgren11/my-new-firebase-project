import { useState, useEffect } from "preact/hooks";
import { api } from "../api";

function FriendProgress({ friend }) {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getFriendActivity(friend.id).then((data) => {
      setActivity(data);
      setLoading(false);
    });
  }, [friend.id]);

  return (
    <li class="p-4 border rounded-lg shadow-sm">
      <h3 class="font-bold">{friend.name}</h3>
      {loading ? (
        <p>Loading progress...</p>
      ) : (
        <div class="mt-2">
          <p>Completed Sessions: {activity.completedSessions}</p>
          <p>Nudges Received: {activity.nudgesReceived}</p>
          <button class="mt-2 bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
            Nudge
          </button>
        </div>
      )}
    </li>
  );
}

export function AccountabilityPage({ user }) {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) return;
    setLoading(true);
    api
      .getFriends(user.uid)
      .then((data) => {
        if (Array.isArray(data)) {
          setFriends(data);
        } else {
          setFriends([]);
        }
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setFriends([]);
      })
      .finally(() => setLoading(false));
  }, [user]);

  return (
    <div class="p-4">
      <h2 class="text-2xl font-bold mb-4">Peer Progress</h2>
      {loading && <div>Loading friends...</div>}
      {error && <div class="text-red-500">Error: {error}</div>}
      {!loading && !error && (
        <ul class="space-y-4">
          {friends.map((friend) => (
            <FriendProgress key={friend.id} friend={friend} />
          ))}
        </ul>
      )}
    </div>
  );
}
