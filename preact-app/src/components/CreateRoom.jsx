import { useState } from "preact/hooks";
import { api } from "../api";

export function CreateRoom({ onRoomCreated }) {
  console.log("CreateRoom component rendering");
  const [name, setName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    try {
      const newRoom = await api.createRoom({ name });
      if (typeof onRoomCreated === 'function') {
        onRoomCreated(newRoom);
      }
      setName(""); 
    } catch (err) {
      console.error("Failed to create room:", err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} class="flex items-center space-x-2">
      <input
        type="text"
        value={name}
        onInput={(e) => setName(e.target.value)}
        placeholder="New room name"
        class="border px-2 py-1 rounded"
      />
      <button
        type="submit"
        class="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
      >
        Create
      </button>
    </form>
  );
}
