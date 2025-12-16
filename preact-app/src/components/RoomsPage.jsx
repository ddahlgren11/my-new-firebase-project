import { useEffect, useState } from "preact/hooks";
import { api } from "../api";
import { CreateRoom } from "./CreateRoom";
import { JoinRoom } from "./JoinRoom";
import { StartSession } from "./StartSession";
import { RoomDetails } from "./RoomDetails";
import { SessionView } from "./SessionView";

export function RoomsPage({ user }) {
  const [rooms, setRooms] = useState([]);
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [activeSession, setActiveSession] = useState(null);
  const [sessionRoom, setSessionRoom] = useState(null);

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
    const roomIndex = rooms.findIndex((room) => room.id === updatedRoom.id);

    if (roomIndex > -1) {
      const updatedRooms = [...rooms];
      updatedRooms[roomIndex] = updatedRoom;
      setRooms(updatedRooms);
    } else {
      setRooms([...rooms, updatedRoom]);
    }
  };

  const handleSessionStarted = (newSession) => {
    console.log("Session started:", newSession);
    const room = rooms.find(r => r.id === newSession.roomId);
    setSessionRoom(room);
    setActiveSession(newSession);
  };

  const handleEndSession = () => {
    setActiveSession(null);
    setSessionRoom(null);
  };

  const selectedRoom = rooms.find(r => r.id === selectedRoomId);

  if (activeSession && sessionRoom) {
    return (
      <SessionView
        session={activeSession}
        room={sessionRoom}
        onEndSession={handleEndSession}
      />
    );
  }

  return (
    <div class="container mx-auto p-6">
      <div class="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 class="text-3xl font-bold text-white mb-4 md:mb-0">Focus Rooms</h2>
        <div class="flex space-x-4">
          <CreateRoom onRoomCreated={handleRoomAction} />
          <JoinRoom onRoomJoined={handleRoomAction} />
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-1">
          <h3 class="text-xl font-semibold text-gray-300 mb-4 px-2">Your Rooms</h3>
          <ul class="space-y-3">
            {rooms.map((r) => (
              <li
                key={r.id}
                class={`p-4 border border-gray-700 rounded-xl flex justify-between items-center cursor-pointer transition-all duration-200 ${
                  selectedRoomId === r.id
                    ? "bg-gray-700 border-indigo-500 shadow-md transform scale-105"
                    : "bg-gray-800 hover:bg-gray-750 hover:border-gray-600"
                }`}
                onClick={() => setSelectedRoomId(r.id)}
              >
                <div class="flex-grow">
                    <span class="font-medium text-lg text-white block">{r.name}</span>
                    <span class="text-xs text-gray-400 mr-2">Code: <span class="font-mono text-indigo-400">{r.inviteCode}</span></span>
                </div>
                <StartSession
                  roomId={r.id}
                  onSessionStarted={handleSessionStarted}
                />
              </li>
            ))}
            {rooms.length === 0 && (
                <div class="text-gray-500 text-center py-8 bg-gray-800 rounded-xl border border-gray-700 border-dashed">
                    No rooms yet. Join or create one!
                </div>
            )}
          </ul>
        </div>

        <div class="lg:col-span-2">
          {selectedRoom ? (
            <div class="bg-gray-800 rounded-xl border border-gray-700 shadow-lg overflow-hidden min-h-[500px]">
                <div class="p-6 border-b border-gray-700 bg-gray-850">
                    <h3 class="text-2xl font-bold text-white">{selectedRoom.name}</h3>
                    <p class="text-gray-400 text-sm mt-1">Room Details & Activity</p>
                </div>
                <div class="p-6">
                    <RoomDetails room={selectedRoom} user={user} onJoinSession={handleSessionStarted} />
                </div>
            </div>
          ) : (
            <div class="bg-gray-800 rounded-xl border border-gray-700 shadow-lg flex items-center justify-center min-h-[500px] text-gray-400">
                <div class="text-center">
                    <span class="text-6xl block mb-4">👈</span>
                    <p class="text-xl">Select a room to view details</p>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
