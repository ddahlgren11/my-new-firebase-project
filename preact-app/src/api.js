// src/api.js
import { getAuth } from "firebase/auth";
import { functions } from "./firebase"; // Import the functions instance
import { httpsCallable } from "firebase/functions"; // Import the callable function utility

const getRoomsCallable = httpsCallable(functions, 'getRooms');
const createRoomCallable = httpsCallable(functions, 'createRoom');
const joinRoomCallable = httpsCallable(functions, 'joinRoom');
const startSessionCallable = httpsCallable(functions, 'startSession');
const getFriendsCallable = httpsCallable(functions, 'getFriends');
const addFriendCallable = httpsCallable(functions, 'addFriend');
const getSuggestedFriendsCallable = httpsCallable(functions, 'getSuggestedFriends');

// Mock storage for session-lived friends
const mockFriends = [];

export const api = {
  getRooms: async () => {
    const result = await getRoomsCallable();
    return result.data;
  },
  
  createRoom: async (data) => {
    const result = await createRoomCallable(data);
    return result.data;
  },
  
  joinRoom: async (inviteCode) => {
    const result = await joinRoomCallable({ inviteCode });
    return result.data;
  },
  
  startSession: async (roomId, mode) => {
    const result = await startSessionCallable({ roomId, mode });
    return result.data;
  },
  
  getFriends: async (userId) => {
    const result = await getFriendsCallable();
    const realFriends = Array.isArray(result.data) ? result.data : [];
    return [...realFriends, ...mockFriends];
  },

  addFriend: async ({ friendCode, username, targetUserId }) => {
    // MOCK: Allow adding example friend Dillon
    if (targetUserId === '12345' || username === 'Dillon') {
        const friend = { id: '12345', name: 'Dillon', status: 'offline' };
        if (!mockFriends.some(f => f.id === '12345')) {
             mockFriends.push(friend);
        }
        return { message: "Friend added", friend };
    }
    const result = await addFriendCallable({ friendCode, username, targetUserId });
    return result.data;
  },

  getSuggestedFriends: async () => {
    let suggestions = [];
    try {
        const result = await getSuggestedFriendsCallable();
        if (Array.isArray(result.data)) {
            suggestions = result.data;
        }
    } catch (e) {
        console.warn("Backend call failed, using mock data only", e);
    }

    // Check if Dillon is already in the list to avoid duplicates
    if (!suggestions.some(u => u.id === '12345')) {
        suggestions.push({ id: '12345', name: 'Dillon', avatarUrl: '' });
    }
    return suggestions;
  },
  
  getFriendActivity: async (friendId) => {
    console.warn("MOCK: getFriendActivity using placeholder data.");
    return { completedSessions: 5, nudgesReceived: 2 };
  },
};
