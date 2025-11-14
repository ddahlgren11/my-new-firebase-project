import { useState, useEffect } from "preact/hooks";
import { api } from "../api";
import { TaskTracker } from "./TaskTracker";

export function RoomDetails({ room, user }) {
  if (!room) return <div>Select a room to see details.</div>;

  // Placeholder for sessionId, as we don't have an API to fetch active sessions yet.
  const sessionId = "s_placeholder_123";

  return (
    <div class="p-4 border rounded-lg shadow-sm">
      <h3 class="text-xl font-bold mb-2">{room.name}</h3>
      <p>
        <strong>Mode:</strong> {room.mode}
      </p>
      <p>
        <strong>Invite Code:</strong>{" "}
        <span class="font-mono bg-gray-200 p-1 rounded">{room.inviteCode}</span>
      </p>
      <TaskTracker roomId={room.id} sessionId={sessionId} userId={user.uid} />
    </div>
  );
}
