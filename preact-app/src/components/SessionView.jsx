import { useState, useEffect } from "preact/hooks";
import { TaskManager } from "./TaskManager";
import { api } from "../api";

export function SessionView({ session, room, onEndSession }) {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [participants, setParticipants] = useState([]);
  const [currentSession, setCurrentSession] = useState(session);
  const [currentUserProfile, setCurrentUserProfile] = useState(null);

  useEffect(() => {
    // Fetch current user profile to identify "me"
    api.getUserProfile().then(setCurrentUserProfile).catch(console.error);
  }, []);

  useEffect(() => {
    // 1. Calculate synced time
    const updateTime = () => {
        const s = currentSession || session;
        const endTime = s.startTime + (s.durationMinutes * 60 * 1000);
        const remaining = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
        setTimeLeft(remaining);
        if (remaining === 0) setIsActive(false);
    };

    updateTime(); // Initial
    const timerInterval = setInterval(updateTime, 1000);

    // 2. Fetch Details (Participants & latest Session state)
    const fetchDetails = async () => {
        try {
            const details = await api.getSessionDetails(session.id);
            setParticipants(details.participants || []);
            if (details.session) {
                setCurrentSession(details.session);
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

  const handleLeaveSession = async () => {
    try {
        await api.leaveSession(session.id);
    } catch (e) {
        console.error("Error leaving session", e);
    } finally {
        onEndSession();
    }
  };

  const handleNudge = async (userId, userName) => {
    try {
        await api.sendNudge(userId);
        alert(`Nudged ${userName}!`);
    } catch (e) {
        console.error("Failed to nudge", e);
        alert("Failed to nudge user.");
    }
  };

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
            {(currentSession?.mode || session.mode).replace('_', ' ')}
          </div>

          {/* Participants */}
          <div class="flex space-x-6 mb-4">
            {participants.map(p => {
                const isMe = currentUserProfile && currentUserProfile.id === p.userId;
                return (
                <div key={p.userId} class="flex flex-col items-center group relative">
                    {p.avatarUrl ? (
                        <img src={p.avatarUrl} alt={p.displayName} class="w-12 h-12 rounded-full border-2 border-purple-500" />
                    ) : (
                        <div class="w-12 h-12 rounded-full bg-gray-600 border-2 border-purple-500 flex items-center justify-center text-sm font-bold">
                            {p.displayName[0]}
                        </div>
                    )}
                    <span class="text-xs text-gray-400 mt-2 font-medium">{p.displayName} {isMe ? '(You)' : ''}</span>

                    {!isMe && (
                        <button
                            onClick={() => handleNudge(p.userId, p.displayName)}
                            class="absolute -top-2 -right-2 bg-yellow-500 hover:bg-yellow-600 text-black text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                            title="Nudge to finish task"
                        >
                            Nudge
                        </button>
                    )}
                </div>
            )})}
          </div>
        </div>

        <div class="flex justify-center space-x-6">
            {/* Removed Pause/Resume for now as they are complex to sync without Firestore listeners.
                Assuming session runs straight through based on server time. */}

          <button
            onClick={handleLeaveSession}
            class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 text-lg"
          >
            Leave Session
          </button>
        </div>

        <div class="flex justify-center mt-8 w-full">
            <TaskManager roomId={room.id} includeAllUsers={true} />
        </div>
      </div>
    </div>
  );
}
