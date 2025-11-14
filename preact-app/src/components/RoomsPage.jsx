import { useEffect, useState } from "preact/hooks";
import { api } from "../api";
import { CreateRoom } from "./CreateRoom";
import { JoinRoom } from "./JoinRoom";
import { StartSession } from "./StartSession";
import { RoomDetails } from "./RoomDetails";

export function RoomsPage({ user }) {
  const [rooms, setRooms] = useState([]);
  const [selectedRoomId, setSelectedRoomId] = useState(null);

  const fetchRooms = () => {
    api
      .getRooms()
      .then((response) => {
        if (Array.isArray(response)) {
          setRooms(response);
        } else {
          console.error("API did not return an array for rooms:", response);
        }
      })
      .catch(console.error);
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const handleRoomAction = (updatedRoom) => {
    // Check if the room already exists
    const roomIndex = rooms.findIndex((room) => room.id === updatedRoom.id);

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
    alert(`Session started with mode: ${newSession.mode}`);
  };

  const selectedRoom = rooms.find(r => r.id === selectedRoomId);

  return (
    <div class="container mx-auto p-4">
      <div class="flex space-x-4 mb-6">
        <CreateRoom onRoomCreated={handleRoomAction} />
        <JoinRoom onRoomJoined={handleRoomAction} />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-xl font-semibold mb-3">My Rooms</h3>
          <ul class="space-y-3">
            {rooms.map((r) => (
              <li
                key={r.id}
                class={`p-4 border rounded-lg flex justify-between items-center shadow-sm cursor-pointer hover:bg-gray-100 ${
                  selectedRoomId === r.id ? "bg-gray-200" : ""
                }`}
                onClick={() => setSelectedRoomId(r.id)}
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
        <div>
          <h3 class="text-xl font-semibold mb-3">Room Details</h3>
          <RoomDetails room={selectedRoom} user={user} />
        </div>
      </div>
    </div>
  );
}
