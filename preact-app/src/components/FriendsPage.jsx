import { useState, useEffect } from "preact/hooks";
import { api } from "../api";

export function FriendsPage({ user }) {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("FriendsPage user:", user);
    if (!user) return;
    setLoading(true);
    try {
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
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, [user]);

  return (
    <div class="p-4">
      <h2 class="text-2xl font-bold mb-4">Focus Friends</h2>
      {loading && <div>Loading friends...</div>}
      {error && <div class="text-red-500">Error: {error}</div>}
      {!loading && !error && (
        <ul class="space-y-3">
          {friends.map((friend) => (
            <li
              key={friend.id}
              class="p-4 border rounded-lg flex justify-between items-center shadow-sm"
            >
              <span class="font-medium">{friend.name}</span>
              <span
                class={`px-2 py-1 text-sm rounded-full ${
                  friend.status === "in-session"
                    ? "bg-green-200 text-green-800"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {friend.status}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
