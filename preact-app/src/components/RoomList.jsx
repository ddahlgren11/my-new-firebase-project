import { useEffect, useState } from "preact/hooks";
import { api } from "../api";

export function RoomList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    api.getRooms().then(setRooms).catch(console.error);
  }, []);

  return (
    <div>
      <h2>My Rooms</h2>
      <ul>
        {rooms.map((r) => (
          <li key={r.id}>{r.name}</li>
        ))}
      </ul>
    </div>
  );
}