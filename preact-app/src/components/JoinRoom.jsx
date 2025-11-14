import { useState } from "preact/hooks";
import { api } from "../api";

export function JoinRoom({ onRoomJoined }) {
  const [inviteCode, setInviteCode] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!inviteCode.trim()) return;
    try {
      const joinedRoom = await api.joinRoom(inviteCode);
      onRoomJoined(joinedRoom);
      setInviteCode("");
    } catch (err) {
      console.error("Failed to join room:", err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} class="flex items-center space-x-2">
      <input
        type="text"
        value={inviteCode}
        onInput={(e) => setInviteCode(e.target.value)}
        placeholder="Enter invite code"
        class="border px-2 py-1 rounded"
      />
      <button
        type="submit"
        class="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
      >
        Join
      </button>
    </form>
  );
}
