// src/api.js
import { getAuth } from "firebase/auth";
import "./firebase"; // Ensure firebase app is initialized

// Base URL for the Express API
// Using relative path to leverage Firebase Hosting rewrites or Vite proxy
const API_BASE_URL = "/api";

// Helper to perform authenticated fetch calls
async function fetchApi(endpoint, options = {}) {
  const auth = getAuth();
  let token = null;

  // Wait for auth to be ready if needed, or just get current user
  const user = auth.currentUser;
  if (user) {
    token = await user.getIdToken();
  }

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config = {
    ...options,
    headers,
  };

  // If there is a body and it is an object, stringify it
  if (config.body && typeof config.body === 'object') {
    config.body = JSON.stringify(config.body);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
  const responseData = await response.json();

  if (!response.ok) {
    // Mimic the Firebase error structure or throw a standard error
    throw new Error(responseData.error || response.statusText);
  }

  return responseData;
}

export const api = {
  syncUser: async () => {
    // Endpoint: PUT /users/me
    return await fetchApi('/users/me', { method: 'PUT' });
  },

  getUserProfile: async () => {
    // Endpoint: GET /users/me
    return await fetchApi('/users/me', { method: 'GET' });
  },

  createTask: async (title, roomId) => {
    // Endpoint: POST /tasks
    return await fetchApi('/tasks', {
      method: 'POST',
      body: { title, roomId }
    });
  },

  getTasks: async (roomId, includeAllUsers = false) => {
    // Endpoint: GET /tasks?roomId=...&includeAllUsers=...
    const params = new URLSearchParams();
    if (roomId) params.append('roomId', roomId);
    if (includeAllUsers) params.append('includeAllUsers', 'true');

    return await fetchApi(`/tasks?${params.toString()}`, { method: 'GET' });
  },

  updateTask: async (taskId, completed) => {
    // Endpoint: PATCH /tasks/:taskId
    return await fetchApi(`/tasks/${taskId}`, {
      method: 'PATCH',
      body: { completed }
    });
  },

  sendNudge: async (friendId) => {
    // Endpoint: POST /nudges
    return await fetchApi('/nudges', {
      method: 'POST',
      body: { friendId }
    });
  },

  getRooms: async () => {
    // Endpoint: GET /users/me/rooms
    return await fetchApi('/users/me/rooms', { method: 'GET' });
  },
  
  createRoom: async (data) => {
    // Endpoint: POST /rooms
    return await fetchApi('/rooms', {
      method: 'POST',
      body: data
    });
  },
  
  joinRoom: async (inviteCode) => {
    // Endpoint: POST /rooms/join
    return await fetchApi('/rooms/join', {
      method: 'POST',
      body: { inviteCode }
    });
  },
  
  startSession: async (roomId, mode) => {
    // Endpoint: POST /rooms/:roomId/sessions
    // Note: The original startSession took more args, assuming defaults or 'mode' contains them?
    // Checking original: { roomId, mode }
    // New endpoint expects: { mode, name, description, duration }
    // We pass what we have.
    return await fetchApi(`/rooms/${roomId}/sessions`, {
      method: 'POST',
      body: { mode }
    });
  },

  joinSession: async (sessionId) => {
    // Endpoint: POST /sessions/:sessionId/join (Convenience)
    return await fetchApi(`/sessions/${sessionId}/join`, { method: 'POST' });
  },

  getSessionDetails: async (sessionId) => {
    // Endpoint: GET /sessions/:sessionId (Convenience)
    return await fetchApi(`/sessions/${sessionId}`, { method: 'GET' });
  },

  endSession: async (sessionId) => {
    // Endpoint: POST /sessions/:sessionId/end (Convenience)
    return await fetchApi(`/sessions/${sessionId}/end`, { method: 'POST' });
  },

  getSessions: async (roomId) => {
    // Endpoint: GET /rooms/:roomId/sessions
    return await fetchApi(`/rooms/${roomId}/sessions`, { method: 'GET' });
  },
  
  getFriends: async (userId) => {
    // Endpoint: GET /users/me/friends
    // If userId provided and is not me, use it?
    const target = userId || 'me';
    return await fetchApi(`/users/${target}/friends`, { method: 'GET' });
  },

  addFriend: async ({ friendCode, username, targetUserId }) => {
    // Endpoint: POST /friends
    return await fetchApi('/friends', {
      method: 'POST',
      body: { friendCode, username, targetUserId }
    });
  },

  getSuggestedFriends: async () => {
    // Endpoint: GET /friends/suggestions
    return await fetchApi('/friends/suggestions', { method: 'GET' });
  },
  
  getFriendActivity: async (friendId) => {
    console.warn("MOCK: getFriendActivity using placeholder data.");
    return { completedSessions: 5, nudgesReceived: 2 };
  },
};
