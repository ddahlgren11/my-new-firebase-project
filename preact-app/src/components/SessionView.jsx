import { useState, useEffect } from "preact/hooks";
import { TaskManager } from "./TaskManager";
import { api } from "../api";

export function SessionView({ session, room, user, onEndSession }) {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    // 1. Calculate synced time
    const updateTime = () => {
        const endTime = session.startTime + (session.durationMinutes * 60 * 1000);
        const remaining = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
        setTimeLeft(remaining);
        if (remaining === 0) setIsActive(false);
    };

    updateTime(); // Initial
    const timerInterval = setInterval(updateTime, 1000);

    // 2. Fetch Participants and Check Status
    const fetchDetails = async () => {
        try {
            const details = await api.getSessionDetails(session.id);
            setParticipants(details.participants || []);

            // Check if session has been ended by host
            if (details.session.endTime) {
                alert("The session has been ended by the host.");
                onEndSession();
            }
        } catch (e) {
            console.error("Failed to fetch session details", e);
        }
    };

    fetchDetails();
    const pollInterval = setInterval(fetchDetails, 5000);

    return () => {
        clearInterval(timerInterval);
        clearInterval(pollInterval);
    };
  }, [session]);

  const handleEndSessionClick = async () => {
      if (window.confirm("Are you sure you want to end the session for everyone?")) {
          try {
              await api.endSession(session.id);
              onEndSession();
          } catch (e) {
              console.error("Failed to end session:", e);
              alert("Failed to end session: " + e.message);
          }
      }
  };

  const isCreator = user && session.userId === user.uid;

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div class="fixed inset-0 bg-gray-900 text-white z-50 flex flex-col items-center justify-center p-8">
      <div class="max-w-4xl w-full bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
        <div class="text-center mb-10">
          <h1 class="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            {room.name}
          </h1>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto">
            {room.description || "No specific requirements for this room. Stay focused!"}
          </p>
        </div>

        <div class="flex flex-col items-center justify-center mb-12">
          <div class="text-9xl font-mono font-bold tracking-wider mb-4 text-white drop-shadow-lg">
            {formatTime(timeLeft)}
          </div>
          <div class="text-2xl text-purple-300 uppercase tracking-widest font-semibold mb-6">
            {session.mode.replace('_', ' ')}
          </div>

          {/* Participants */}
          <div class="flex space-x-4 mb-4">
            {participants.map(p => (
                <div key={p.userId} class="flex flex-col items-center">
                    {p.avatarUrl ? (
                        <img src={p.avatarUrl} alt={p.displayName} class="w-10 h-10 rounded-full border-2 border-purple-500" />
                    ) : (
                        <div class="w-10 h-10 rounded-full bg-gray-600 border-2 border-purple-500 flex items-center justify-center text-xs font-bold">
                            {p.displayName[0]}
                        </div>
                    )}
                    <span class="text-xs text-gray-400 mt-1">{p.displayName}</span>
                </div>
            ))}
          </div>
        </div>

        <div class="flex justify-center space-x-6">
            {/* Removed Pause/Resume for now as they are complex to sync without Firestore listeners.
                Assuming session runs straight through based on server time. */}

          {isCreator ? (
              <button
                onClick={handleEndSessionClick}
                class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 text-lg"
              >
                End Session
              </button>
          ) : (
              <button
                onClick={onEndSession}
                class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 text-lg"
              >
                Leave Session
              </button>
          )}
        </div>

        <div class="flex justify-center mt-8 w-full">
            <TaskManager roomId={room.id} includeAllUsers={true} />
        </div>
      </div>
    </div>
  );
}
