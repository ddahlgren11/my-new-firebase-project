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
    <div class="bg-gray-800 border border-gray-700 rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow duration-200">
      <div class="flex justify-between items-start mb-4">
        <div class="flex items-center space-x-3">
            <div class="h-10 w-10 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-200 font-bold border border-indigo-500/30">
                {friend.name.substring(0, 2).toUpperCase()}
            </div>
            <div>
                <h3 class="font-bold text-white text-lg">{friend.name}</h3>
                <p class="text-xs text-gray-400">Level 5 Focus Master</p>
            </div>
        </div>
        <div class="bg-amber-900/30 text-amber-500 px-2 py-1 rounded text-xs font-mono border border-amber-500/20">
            🔥 3 Day Streak
        </div>
      </div>

      {loading ? (
        <div class="animate-pulse space-y-3">
            <div class="h-4 bg-gray-700 rounded w-3/4"></div>
            <div class="h-4 bg-gray-700 rounded w-1/2"></div>
        </div>
      ) : (
        <div class="mt-2">
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="bg-gray-900/50 p-3 rounded-lg text-center border border-gray-700">
                <span class="block text-2xl font-bold text-white">{activity.completedSessions}</span>
                <span class="text-xs text-gray-400 uppercase tracking-wider">Sessions</span>
            </div>
            <div class="bg-gray-900/50 p-3 rounded-lg text-center border border-gray-700">
                <span class="block text-2xl font-bold text-white">{activity.nudgesReceived}</span>
                <span class="text-xs text-gray-400 uppercase tracking-wider">Nudges</span>
            </div>
          </div>
          <button class="w-full mt-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-medium px-4 py-2 rounded-lg transition-all duration-200 shadow-sm flex justify-center items-center group">
            <span class="mr-2 group-hover:scale-110 transition-transform">👋</span> Send a Nudge
          </button>
        </div>
      )}
    </div>
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
    <div class="container mx-auto p-6 max-w-5xl">
      <header class="mb-8">
        <h2 class="text-3xl font-bold text-white">Peer Progress</h2>
        <p class="text-gray-400 mt-1">Keep each other accountable and celebrate wins.</p>
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
        <>
            {friends.length === 0 ? (
                <div class="text-center py-12 px-6 bg-gray-800 rounded-xl border border-gray-700">
                    <div class="text-6xl mb-4">🌱</div>
                    <h3 class="text-xl font-medium text-white mb-2">No accountability partners yet</h3>
                    <p class="text-gray-400 mb-6">Add friends to start tracking progress together.</p>
                    <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">Find Friends</button>
                </div>
            ) : (
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {friends.map((friend) => (
                    <FriendProgress key={friend.id} friend={friend} />
                ))}
                </div>
            )}
        </>
      )}
    </div>
  );
}
