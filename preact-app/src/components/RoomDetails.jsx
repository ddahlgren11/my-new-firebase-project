import { useState, useEffect } from "preact/hooks";
import { useRoute } from "preact-iso";
import { api } from "../api";
import { TaskTracker } from "./TaskTracker";

export function RoomDetails({ user }) {
  const { roomId } = useRoute();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSession, setActiveSession] = useState(null);

  useEffect(() => {
    if (roomId) {
      setLoading(true);
      api.getRoom(roomId)
        .then(data => {
            setRoom(data);
            setLoading(false);
        })
        .catch(err => {
            console.error(err);
            setError("Room not found or access denied.");
            setLoading(false);
        });
    }
  }, [roomId]);

  useEffect(() => {
    let intervalId;

    const fetchSessions = () => {
      api.getSessions(room.id)
        .then(sessions => {
          // Find active session
          const now = Date.now();
          const active = sessions.find(s => {
            const endTime = s.startTime + (s.durationMinutes * 60 * 1000);
            return !s.endTime && now < endTime;
          });
          setActiveSession(active || null);
        })
        .catch(console.error);
    };

    if (room) {
      fetchSessions();
      // Poll every 10 seconds
      intervalId = setInterval(fetchSessions, 10000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [room]);

  if (loading) return <div class="p-6 text-gray-300">Loading room details...</div>;
  if (error) return <div class="p-6 text-red-400">{error}</div>;
  if (!room) return <div class="p-6 text-gray-300">Room not found.</div>;

  const sessionId = activeSession ? activeSession.id : "s_placeholder_123";

  return (
    <div class="container mx-auto p-6">
      <div class="bg-gray-800 rounded-xl border border-gray-700 shadow-lg overflow-hidden">
        <div class="p-6 border-b border-gray-700 bg-gray-850">
           <h3 class="text-2xl font-bold text-white">{room.name}</h3>
           <p class="text-gray-400 text-sm mt-1">Room Details & Activity</p>
        </div>
        <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <div>
                 <p class="text-gray-300"><strong>Mode:</strong> {room.mode || "Standard"}</p>
              </div>
              {activeSession && (
                <button
                  onClick={async () => {
                      // Note: onJoinSession prop was removed as parent state management for session view
                      // might need to be refactored if we want full screen session view.
                      // For now, let's just join via API and maybe redirect?
                      // The original logic lifted state to RoomsPage.
                      await api.joinSession(activeSession.id);
                      window.location.reload(); // Simple reload to refresh state or we need better session management
                  }}
                  class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded animate-pulse"
                >
                  Join Active Session
                </button>
              )}
            </div>

            <div class="mb-4 text-gray-300">
              <div class="p-3 bg-indigo-900 bg-opacity-30 border border-indigo-700 rounded-lg">
                 <p class="text-sm text-indigo-300 mb-1 font-bold uppercase tracking-wider">Room Join Code</p>
                 <div class="flex items-center space-x-2">
                   <span class="text-2xl font-mono font-bold text-white tracking-widest select-all">{room.inviteCode}</span>
                   <button
                      class="text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded"
                      onClick={() => navigator.clipboard.writeText(room.inviteCode)}
                   >
                      Copy
                   </button>
                 </div>
                 <p class="text-xs text-gray-400 mt-1">Share this code with friends to let them join.</p>
              </div>
            </div>
            <div class="mb-6">
                <h4 class="font-bold text-gray-300 mb-1">Requirements:</h4>
                <p class="text-gray-400 italic bg-gray-900 p-3 rounded border border-gray-700">
                  {room.description || "No specific requirements set."}
                </p>
            </div>
            <TaskTracker roomId={room.id} sessionId={sessionId} userId={user.uid} />
        </div>
      </div>
    </div>
  );
}
