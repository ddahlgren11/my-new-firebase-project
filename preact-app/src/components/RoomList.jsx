import { useEffect, useState } from "preact/hooks";
import { api } from "../api";
import { CreateRoom } from "./CreateRoom";
import { JoinRoom } from "./JoinRoom";
import { StartSession } from "./StartSession";

export function RoomList() {
  console.log("RoomList component rendering");
  const [rooms, setRooms] = useState([]);

  const fetchRooms = () => {
    api.getRooms().then(response => {
      if (Array.isArray(response)) {
        setRooms(response);
      } else {
        console.error("API did not return an array for rooms:", response);
      }
    }).catch(console.error);
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const handleRoomAction = (updatedRoom) => {
    // Check if the room already exists
    const roomIndex = rooms.findIndex(room => room.id === updatedRoom.id);
  
    if (roomIndex > -1) {
      // If room exists, update it (though for join/create it's more like an add)
      const updatedRooms = [...rooms];
      updatedRooms[roomIndex] = updatedRoom;
      setRooms(updatedRooms);
    } else {
      // If room doesn't exist, add it to the list
      setRooms([...rooms, updatedRoom]);
    }
  };

  const handleSessionStarted = (newSession) => {
    console.log("Session started:", newSession);
    // UI update for new session is out of scope for this task.
  };

  return (
    <div class="container mx-auto p-4">
      <h2 class="text-2xl font-bold mb-4">Dashboard</h2>

      <div class="flex space-x-4 mb-6">
        <CreateRoom onRoomCreated={handleRoomAction} />
        <JoinRoom onRoomJoined={handleRoomAction} />
      </div>

      <h3 class="text-xl font-semibold mb-3">My Rooms</h3>
      <ul class="space-y-3">
        {rooms.map((r) => (
          <li
            key={r.id}
            class="p-4 border rounded-lg flex justify-between items-center shadow-sm"
          >
            <span class="font-medium">{r.name}</span>
            <StartSession
              roomId={r.id}
              onSessionStarted={handleSessionStarted}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
