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
    <div class="container mx-auto p-6 max-w-4xl">
      <header class="mb-8 flex items-center justify-between">
        <div>
            <h2 class="text-3xl font-bold text-white">Focus Friends</h2>
            <p class="text-gray-400 mt-1">See who is online and working.</p>
        </div>
        <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 shadow-sm flex items-center">
            <span>+ Add Friend</span>
        </button>
      </header>

      {loading && (
        <div class="flex justify-center items-center py-12">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
        </div>
      )}

      {error && (
        <div class="bg-red-900/20 border border-red-500/50 text-red-200 p-4 rounded-lg mb-6">
            Error: {error}
        </div>
      )}

      {!loading && !error && (
        <div class="bg-gray-800 rounded-xl border border-gray-700 shadow-sm overflow-hidden">
            {friends.length === 0 ? (
                <div class="text-center py-12 px-6">
                    <div class="text-6xl mb-4">👋</div>
                    <h3 class="text-xl font-medium text-white mb-2">No friends yet</h3>
                    <p class="text-gray-400">Invite friends to see their status here.</p>
                </div>
            ) : (
                <ul class="divide-y divide-gray-700">
                {friends.map((friend) => (
                    <li
                    key={friend.id}
                    class="p-4 hover:bg-gray-750 transition-colors duration-150 flex justify-between items-center"
                    >
                    <div class="flex items-center space-x-4">
                        <div class="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                            {friend.name.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                            <span class="font-medium text-white block">{friend.name}</span>
                            <span class="text-xs text-gray-400">Last active: 2h ago</span>
                        </div>
                    </div>
                    <span
                        class={`px-3 py-1 text-xs font-semibold rounded-full border ${
                        friend.status === "in-session"
                            ? "bg-emerald-900/30 text-emerald-400 border-emerald-500/30"
                            : "bg-gray-700 text-gray-400 border-gray-600"
                        }`}
                    >
                        {friend.status === "in-session" ? "⚡ In Focus" : "💤 Offline"}
                    </span>
                    </li>
                ))}
                </ul>
            )}
        </div>
      )}
    </div>
  );
}
