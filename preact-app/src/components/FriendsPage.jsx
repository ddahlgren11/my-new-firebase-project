import { useState, useEffect } from "preact/hooks";
import { api } from "../api";

export function FriendsPage({ user }) {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Popup state
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [addMode, setAddMode] = useState("name"); // "name" or "code"
  const [addInput, setAddInput] = useState("");
  const [addStatus, setAddStatus] = useState(null); // null, "adding", "success", "error"
  const [addMessage, setAddMessage] = useState("");

  // Suggestions
  const [suggestions, setSuggestions] = useState([]);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);

  const fetchFriends = () => {
    if (!user) return;
    setLoading(true);
    api
      .getFriends(user.uid)
      .then((data) => {
        setFriends(Array.isArray(data) ? data : []);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setFriends([]);
      })
      .finally(() => setLoading(false));
  };

  const fetchSuggestions = () => {
    setLoadingSuggestions(true);
    api.getSuggestedFriends()
      .then(data => {
        setSuggestions(Array.isArray(data) ? data : []);
      })
      .catch(err => console.error("Failed to fetch suggestions:", err))
      .finally(() => setLoadingSuggestions(false));
  };

  useEffect(() => {
    fetchFriends();
  }, [user]);

  useEffect(() => {
    if (showAddPopup) {
        fetchSuggestions();
    }
  }, [showAddPopup]);

  const handleAddFriend = async (e) => {
    e.preventDefault();
    if (!addInput.trim()) return;

    setAddStatus("adding");
    setAddMessage("");

    try {
        const payload = addMode === "code" ? { friendCode: addInput } : { username: addInput };
        await api.addFriend(payload);
        setAddStatus("success");
        setAddMessage("Friend added successfully!");
        setAddInput("");
        fetchFriends(); // Refresh list
        fetchSuggestions(); // Refresh suggestions
    } catch (err) {
        setAddStatus("error");
        setAddMessage(err.message || "Failed to add friend");
    }
  };

  const handleAddSuggestion = async (user) => {
      // Use targetUserId to avoid name collision, supported by updated API
      setAddStatus("adding");
      setAddMessage("");
      try {
        await api.addFriend({ targetUserId: user.id });
        setAddStatus("success");
        setAddMessage(`Added ${user.name} as friend!`);
        fetchFriends();
        fetchSuggestions();
      } catch (err) {
        setAddStatus("error");
        setAddMessage(err.message || "Failed to add friend");
      }
  };

  return (
    <div class="container mx-auto p-6 max-w-4xl relative">
      <header class="mb-8 flex items-center justify-between">
        <div>
            <h2 class="text-3xl font-bold text-white">Focus Friends</h2>
            <p class="text-gray-400 mt-1">See who is online and working.</p>
        </div>
        <button
            onClick={() => setShowAddPopup(true)}
            class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 shadow-sm flex items-center"
        >
            <span>+ Add Friend</span>
        </button>
      </header>

      {/* Main List */}
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
                            <span class="text-xs text-gray-400">
                                {friend.status === "in-session" ? "Working now" : "Last active recently"}
                            </span>
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

      {/* Add Friend Popup */}
      {showAddPopup && (
        <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <div class="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 w-full max-w-md overflow-hidden flex flex-col max-h-[90vh]">
                <div class="p-4 border-b border-gray-700 flex justify-between items-center">
                    <h3 class="text-xl font-bold text-white">Add Friend</h3>
                    <button
                        onClick={() => setShowAddPopup(false)}
                        class="text-gray-400 hover:text-white"
                    >
                        ✕
                    </button>
                </div>

                <div class="p-6 overflow-y-auto">
                    <div class="flex space-x-4 mb-6">
                        <button
                            onClick={() => { setAddMode("name"); setAddStatus(null); setAddMessage(""); }}
                            class={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                                addMode === "name"
                                ? "bg-indigo-600 text-white"
                                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                            }`}
                        >
                            By Name
                        </button>
                        <button
                            onClick={() => { setAddMode("code"); setAddStatus(null); setAddMessage(""); }}
                            class={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                                addMode === "code"
                                ? "bg-indigo-600 text-white"
                                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                            }`}
                        >
                            By Code
                        </button>
                    </div>

                    <form onSubmit={handleAddFriend} class="mb-8">
                        <div class="mb-4">
                            <label class="block text-gray-400 text-sm font-bold mb-2">
                                {addMode === "name" ? "Friend's Username" : "Friend Code"}
                            </label>
                            <input
                                type="text"
                                class="w-full bg-gray-900 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-indigo-500"
                                placeholder={addMode === "name" ? "Enter username..." : "Enter 6-character code..."}
                                value={addInput}
                                onInput={(e) => setAddInput(e.target.value)}
                            />
                        </div>

                        {addMessage && (
                            <div class={`mb-4 text-sm ${addStatus === "success" ? "text-green-400" : "text-red-400"}`}>
                                {addMessage}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={addStatus === "adding"}
                            class="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-colors"
                        >
                            {addStatus === "adding" ? "Adding..." : "Add Friend"}
                        </button>
                    </form>

                    {/* Suggestions Section */}
                    <div>
                        <h4 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Suggested Friends</h4>
                        {loadingSuggestions ? (
                            <div class="flex justify-center py-4">
                                <div class="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-500"></div>
                            </div>
                        ) : suggestions.length > 0 ? (
                            <ul class="space-y-3">
                                {suggestions.map(user => (
                                    <li key={user.id} class="bg-gray-700/50 rounded-lg p-3 flex items-center justify-between">
                                        <div class="flex items-center space-x-3">
                                            <div class="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold text-white">
                                                {user.name.substring(0, 2).toUpperCase()}
                                            </div>
                                            <div>
                                                <span class="text-white text-sm font-medium block">{user.name}</span>
                                                <span class="text-gray-400 text-xs">Shared Room</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleAddSuggestion(user)}
                                            class="text-indigo-400 hover:text-indigo-300 text-sm font-medium"
                                        >
                                            Add
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p class="text-gray-500 text-center py-2 text-sm">No suggestions available.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
}
