import { useState, useEffect } from "preact/hooks";
import { TaskManager } from "./TaskManager";

export function SessionView({ session, room, onEndSession }) {
  const [timeLeft, setTimeLeft] = useState(session.durationMinutes * 60);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((seconds) => seconds - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      // Optional: Play a sound or show notification
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

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
          <div class="text-2xl text-purple-300 uppercase tracking-widest font-semibold">
            {session.mode.replace('_', ' ')}
          </div>
        </div>

        <div class="flex justify-center space-x-6">
            {!isActive && timeLeft > 0 ? (
                 <button
                 onClick={() => setIsActive(true)}
                 class="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 text-lg"
               >
                 Resume
               </button>
            ) : (
                isActive && (
                    <button
                    onClick={() => setIsActive(false)}
                    class="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 text-lg"
                  >
                    Pause
                  </button>
                )
            )}

          <button
            onClick={onEndSession}
            class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 text-lg"
          >
            End Session
          </button>
        </div>

        <div class="flex justify-center mt-8">
            <TaskManager roomId={room.id} />
        </div>
      </div>
    </div>
  );
}
