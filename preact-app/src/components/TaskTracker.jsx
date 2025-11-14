import { useState } from "preact/hooks";
import { api } from "../api";

export function TaskTracker({ roomId, sessionId, userId }) {
  const [task, setTask] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!task.trim()) return;

    setIsSubmitting(true);
    setError(null);
    try {
      // The API expects a `tasks` object. We'll send the single task.
      await api.trackProgress(roomId, sessionId, userId, { task });
      setTask(""); // Clear input on success
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} class="mt-4">
      <h4 class="font-semibold mb-2">Track Your Progress</h4>
      <div class="flex items-center space-x-2">
        <input
          type="text"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          placeholder="Enter a completed task"
          class="border px-2 py-1 rounded w-full"
          disabled={isSubmitting}
        />
        <button
          type="submit"
          class="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 disabled:bg-gray-400"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
      {error && <p class="text-red-500 mt-2">Error: {error}</p>}
    </form>
  );
}
