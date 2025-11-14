import { useState } from "preact/hooks";
import { api } from "../api";

export function StartSession({ roomId, onSessionStarted }) {
  console.log("StartSession component rendering");
  const [mode, setMode] = useState("pomodoro");

  async function handleStart() {
    try {
      const newSession = await api.startSession(roomId, mode);
      onSessionStarted(newSession);
    } catch (err) {
      console.error("Failed to start session:", err.message);
    }
  }

  return (
    <div class="flex items-center space-x-2">
      <select
        value={mode}
        onChange={(e) => setMode(e.target.value)}
        class="border px-2 py-1 rounded"
      >
        <option value="pomodoro">Pomodoro (25 min)</option>
        <option value="short_break">Short Break (5 min)</option>
        <option value="long_break">Long Break (15 min)</option>
      </select>
      <button
        onClick={handleStart}
        class="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
      >
        Start Session
      </button>
    </div>
  );
}
