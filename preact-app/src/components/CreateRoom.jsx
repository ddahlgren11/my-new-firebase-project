import { useState } from "preact/hooks";
import { api } from "../api";

export function CreateRoom({ onRoomCreated }) {
  console.log("CreateRoom component rendering");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    try {
      const newRoom = await api.createRoom({ name, description });
      if (typeof onRoomCreated === 'function') {
        onRoomCreated(newRoom);
      }
      setName("");
      setDescription("");
      setIsOpen(false);
    } catch (err) {
      console.error("Failed to create room:", err.message);
    }
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
      >
        + Create Room
      </button>
    );
  }

  return (
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md border border-gray-700">
        <h3 class="text-xl font-bold text-white mb-4">Create New Room</h3>
        <form onSubmit={handleSubmit} class="flex flex-col space-y-4">
          <div>
            <label class="block text-gray-400 text-sm mb-1">Room Name</label>
            <input
              type="text"
              value={name}
              onInput={(e) => setName(e.target.value)}
              placeholder="e.g. Study Group A"
              class="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <div>
            <label class="block text-gray-400 text-sm mb-1">Requirements / Description</label>
            <textarea
              value={description}
              onInput={(e) => setDescription(e.target.value)}
              placeholder="e.g. Must have camera on, 25/5 pomodoro..."
              class="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white h-24 focus:outline-none focus:border-green-500"
            />
          </div>
          <div class="flex justify-end space-x-3 mt-2">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              class="px-4 py-2 text-gray-300 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Create Room
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
