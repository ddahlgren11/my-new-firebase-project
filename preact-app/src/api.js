// src/api.js
import { getAuth } from "firebase/auth";
import { functions } from "./firebase"; // Import the functions instance
import { httpsCallable } from "firebase/functions"; // Import the callable function utility

const getRoomsCallable = httpsCallable(functions, 'getRooms');
const createRoomCallable = httpsCallable(functions, 'createRoom');
const joinRoomCallable = httpsCallable(functions, 'joinRoom');
const startSessionCallable = httpsCallable(functions, 'startSession');
const getSessionsCallable = httpsCallable(functions, 'getSessions');
const getFriendsCallable = httpsCallable(functions, 'getFriends');
const addFriendCallable = httpsCallable(functions, 'addFriend');
const getSuggestedFriendsCallable = httpsCallable(functions, 'getSuggestedFriends');
const createTaskCallable = httpsCallable(functions, 'createTask');
const getTasksCallable = httpsCallable(functions, 'getTasks');
const updateTaskCallable = httpsCallable(functions, 'updateTask');
const sendNudgeCallable = httpsCallable(functions, 'sendNudge');
const syncUserCallable = httpsCallable(functions, 'syncUser');
const getUserProfileCallable = httpsCallable(functions, 'getUserProfile');

export const api = {
  syncUser: async () => {
    await syncUserCallable();
  },

  getUserProfile: async () => {
    const result = await getUserProfileCallable();
    return result.data;
  },

  createTask: async (title, roomId) => {
    const result = await createTaskCallable({ title, roomId });
    return result.data;
  },

  getTasks: async (roomId) => {
    const result = await getTasksCallable({ roomId });
    return result.data;
  },

  updateTask: async (taskId, completed) => {
    const result = await updateTaskCallable({ taskId, completed });
    return result.data;
  },

  sendNudge: async (friendId) => {
    const result = await sendNudgeCallable({ friendId });
    return result.data;
  },

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

  getSessions: async (roomId) => {
    const result = await getSessionsCallable({ roomId });
    return result.data;
  },
  
  getFriends: async (userId) => {
    const result = await getFriendsCallable();
    return Array.isArray(result.data) ? result.data : [];
  },

  addFriend: async ({ friendCode, username, targetUserId }) => {
    const result = await addFriendCallable({ friendCode, username, targetUserId });
    return result.data;
  },

  getSuggestedFriends: async () => {
    const result = await getSuggestedFriendsCallable();
    if (Array.isArray(result.data)) {
        return result.data;
    }
    return [];
  },
  
  getFriendActivity: async (friendId) => {
    console.warn("MOCK: getFriendActivity using placeholder data.");
    return { completedSessions: 5, nudgesReceived: 2 };
  },
};
