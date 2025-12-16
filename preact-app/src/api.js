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
const createTaskCallable = httpsCallable(functions, 'createTask');
const getTasksCallable = httpsCallable(functions, 'getTasks');
const updateTaskCallable = httpsCallable(functions, 'updateTask');
const sendNudgeCallable = httpsCallable(functions, 'sendNudge');
const syncUserCallable = httpsCallable(functions, 'syncUser');

export const api = {
  syncUser: async () => {
    try {
      await syncUserCallable();
    } catch (e) {
      console.warn("Failed to sync user profile", e);
    }
  },

  createTask: async (title, roomId) => {
    try {
        const result = await createTaskCallable({ title, roomId });
        return result.data;
    } catch (e) {
        console.warn("Backend unavailable, using mock task");
        return { id: 'mock-task-' + Date.now(), title, completed: false, roomId };
    }
  },

  getTasks: async (roomId) => {
    try {
        const result = await getTasksCallable({ roomId });
        return result.data;
    } catch (e) {
        console.warn("Backend unavailable, returning empty list");
        return [];
    }
  },

  updateTask: async (taskId, completed) => {
    try {
        const result = await updateTaskCallable({ taskId, completed });
        return result.data;
    } catch (e) {
        console.warn("Backend unavailable, mocking success");
        return { id: taskId, completed };
    }
  },

  sendNudge: async (friendId) => {
    try {
        const result = await sendNudgeCallable({ friendId });
        return result.data;
    } catch (e) {
         console.warn("Backend unavailable, mocking nudge");
         return { success: true };
    }
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
  
  getFriends: async (userId) => {
    try {
        const result = await getFriendsCallable();
        return Array.isArray(result.data) ? result.data : [];
    } catch (e) {
        console.error("Error fetching friends", e);
        return [];
    }
  },

  addFriend: async ({ friendCode, username, targetUserId }) => {
    const result = await addFriendCallable({ friendCode, username, targetUserId });
    return result.data;
  },

  getSuggestedFriends: async () => {
    try {
        const result = await getSuggestedFriendsCallable();
        if (Array.isArray(result.data)) {
            return result.data;
        }
        return [];
    } catch (e) {
        console.warn("Backend call failed", e);
        return [];
    }
  },
  
  getFriendActivity: async (friendId) => {
    console.warn("MOCK: getFriendActivity using placeholder data.");
    return { completedSessions: 5, nudgesReceived: 2 };
  },
};
