import { useState, useEffect } from "preact/hooks";
import { api } from "../api";

export function TaskManager({ roomId }) {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadTasks();
  }, [roomId]);

  async function loadTasks() {
    setLoading(true);
    try {
      const data = await api.getTasks(roomId);
      setTasks(data);
      setError(null);
    } catch (err) {
      console.error("Failed to load tasks:", err);
      setError("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  }

  async function handleAddTask(e) {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    setAdding(true);
    try {
      const task = await api.createTask(newTaskTitle, roomId);
      setTasks([task, ...tasks]);
      setNewTaskTitle("");
    } catch (err) {
      console.error("Failed to add task:", err);
      setError("Failed to add task");
    } finally {
      setAdding(false);
    }
  }

  async function handleToggleTask(taskId, completed) {
    // Optimistic update
    setTasks(tasks.map(t => t.id === taskId ? { ...t, completed } : t));

    try {
      await api.updateTask(taskId, completed);
    } catch (err) {
      console.error("Failed to update task:", err);
      setError("Failed to update task");
      // Revert
      setTasks(tasks.map(t => t.id === taskId ? { ...t, completed: !completed } : t));
    }
  }

  return (
    <div class="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 w-full max-w-md mt-8">
      <h3 class="text-xl font-bold text-white mb-4 flex items-center">
        <span class="mr-2">📝</span> Session Tasks
      </h3>

      <form onSubmit={handleAddTask} class="flex gap-2 mb-4">
        <input
          type="text"
          value={newTaskTitle}
          onInput={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Add a task for this session..."
          class="flex-1 bg-gray-900 border border-gray-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
          disabled={adding}
        />
        <button
          type="submit"
          class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
          disabled={adding || !newTaskTitle.trim()}
        >
          {adding ? "..." : "Add"}
        </button>
      </form>

      {error && (
        <div class="text-red-400 text-sm mb-4 bg-red-900/20 p-2 rounded border border-red-500/20">
          {error}
        </div>
      )}

      {loading ? (
        <div class="flex justify-center py-4">
          <div class="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-500"></div>
        </div>
      ) : tasks.length === 0 ? (
        <p class="text-gray-400 text-center py-4 italic">No tasks yet. Set a goal!</p>
      ) : (
        <ul class="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
          {tasks.map((task) => (
            <li key={task.id} class="flex items-center group bg-gray-900/50 p-3 rounded-lg border border-transparent hover:border-gray-600 transition-colors">
              <label class="flex items-center cursor-pointer w-full">
                <div class="relative flex items-center">
                    <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={(e) => handleToggleTask(task.id, e.target.checked)}
                    class="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-500 bg-gray-900 transition-all checked:border-green-500 checked:bg-green-500 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:ring-offset-0"
                    />
                    <svg
                    class="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity peer-checked:opacity-100"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.5 6L5 7.5L8.5 4"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    </svg>
                </div>
                <span class={`ml-3 text-sm transition-all duration-200 ${task.completed ? 'text-gray-500 line-through' : 'text-gray-200'}`}>
                  {task.title}
                </span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
