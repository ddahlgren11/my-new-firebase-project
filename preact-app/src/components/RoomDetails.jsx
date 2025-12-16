import { useState, useEffect } from "preact/hooks";
import { api } from "../api";
import { TaskTracker } from "./TaskTracker";

export function RoomDetails({ room, user, onJoinSession }) {
  const [activeSession, setActiveSession] = useState(null);

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

  if (!room) return <div>Select a room to see details.</div>;

  const sessionId = activeSession ? activeSession.id : "s_placeholder_123";

  return (
    <div class="p-4 border rounded-lg shadow-sm">
      <div class="flex justify-between items-start mb-4">
        <div>
           <h3 class="text-xl font-bold mb-2">{room.name}</h3>
           <p class="text-gray-300"><strong>Mode:</strong> {room.mode || "Standard"}</p>
        </div>
        {activeSession && (
          <button
            onClick={async () => {
              try {
                await api.joinSession(activeSession.id);
                onJoinSession(activeSession);
              } catch (e) {
                console.error("Failed to join session:", e);
                alert("Failed to join session: " + e.message);
              }
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
  );
}
