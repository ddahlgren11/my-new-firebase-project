// src/api.js
import { getAuth } from "firebase/auth";
import { functions } from "./firebase"; // Import the functions instance
import { httpsCallable } from "firebase/functions"; // Import the callable function utility

// We no longer need fetchWithAuth, as httpsCallable handles token injection and routing.

// --- Define the Callable Functions ---
// The string argument is the name of the function you deploy (e.g., 'getRooms' in your functions/index.js)
const getRoomsCallable = httpsCallable(functions, 'getRooms');
const createRoomCallable = httpsCallable(functions, 'createRoom');
const joinRoomCallable = httpsCallable(functions, 'joinRoom');
const startSessionCallable = httpsCallable(functions, 'startSession');
const getFriendsCallable = httpsCallable(functions, 'getFriends');
const addFriendCallable = httpsCallable(functions, 'addFriend');
const getSuggestedFriendsCallable = httpsCallable(functions, 'getSuggestedFriends');

// --- Export reusable API calls ---
export const api = {
  // getRooms: Calls the 'getRooms' function. No data passed in the request body.
  getRooms: async () => {
    // Call the function and return the result.data (which contains the array of rooms)
    const result = await getRoomsCallable();
    return result.data;
  },
  
  // createRoom: Calls the 'createRoom' function, passing the room data as the request body.
  createRoom: async (data) => {
    const result = await createRoomCallable(data);
    return result.data;
  },
  
  // joinRoom: Calls the 'joinRoom' function, passing the invite code as the request body.
  joinRoom: async (inviteCode) => {
    const result = await joinRoomCallable({ inviteCode }); // Callable functions take a single object payload
    return result.data;
  },
  
  // startSession: Calls the 'startSession' function.
  startSession: async (roomId, mode) => {
    const result = await startSessionCallable({ roomId, mode });
    return result.data;
  },
  
  getFriends: async (userId) => {
    // Note: The backend function gets userId from context mostly, but we keep signature consistent
    const result = await getFriendsCallable();
    return result.data;
  },

  addFriend: async ({ friendCode, username, targetUserId }) => {
    const result = await addFriendCallable({ friendCode, username, targetUserId });
    return result.data;
  },

  getSuggestedFriends: async () => {
    const result = await getSuggestedFriendsCallable();
    return result.data;
  },
  
  getFriendActivity: async (friendId) => {
    console.warn("MOCK: getFriendActivity using placeholder data.");
    return { completedSessions: 5, nudgesReceived: 2 };
  },
};