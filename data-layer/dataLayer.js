const admin = require("firebase-admin");

// Initialize Firestore
// We assume admin.initializeApp() is called by the consumer (functions/index.js)
// or we can check admin.apps.length.
// Ideally, passing the db instance is better for dependency injection,
// but for this structure, accessing the singleton is acceptable.
const db = admin.firestore();

// Mini-ORM Mapper
function mapToEntity(schema, data) {
  const obj = {};
  for (const key of Object.keys(schema)) {
    const def = schema[key].default;
    const val = data[key];
    if (val !== undefined) {
      obj[key] = val;
    } else {
      obj[key] = (typeof def === "function" ? def() : def);
    }
  }
  return obj;
}

// Schemas
const Schemas = {
  User: {
    displayName: { default: "" },
    email: { default: "" },
    avatarUrl: { default: "" },
    createdAt: { default: () => Date.now() }
  },
  Room: {
    name: { default: "New Room" },
    description: { default: "" },
    ownerId: { default: null },
    createdAt: { default: () => Date.now() }
  },
  RoomMembership: {
    roomId: { default: null },
    userId: { default: null },
    role: { default: "member" }, // "member" | "admin"
    joinedAt: { default: () => Date.now() }
  },
  Session: {
    roomId: { default: null },
    userId: { default: null },
    name: { default: "" },
    description: { default: "" },
    startTime: { default: () => Date.now() },
    endTime: { default: null },
    mode: { default: "focus" },
    durationMinutes: { default: 25 }
  },
  Task: {
    userId: { default: null },
    roomId: { default: null }, // nullable
    title: { default: "" },
    completed: { default: false },
    createdAt: { default: () => Date.now() },
    completedAt: { default: null }
  },
  Message: {
    roomId: { default: null },
    userId: { default: null },
    text: { default: "" },
    createdAt: { default: () => Date.now() }
  }
};

// --- Interfaces (kept for documentation/structure) ---
// ... (Omitted for brevity, but implied)

// --- Firestore Implementations ---

class FirestoreUserRepository {
  constructor(firestore) {
    this.collection = firestore.collection('users');
  }

  async createUser(data) {
    const entity = mapToEntity(Schemas.User, data);
    // If data.id is provided (e.g. from Auth UID), use it as doc ID
    if (data.id) {
        await this.collection.doc(data.id).set(entity);
        return { id: data.id, ...entity };
    } else {
        const docRef = await this.collection.add(entity);
        return { id: docRef.id, ...entity };
    }
  }

  async getUserById(id) {
    const doc = await this.collection.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() };
  }

  async updateUser(id, fields) {
      await this.collection.doc(id).update(fields);
      return this.getUserById(id);
  }
}

class FirestoreRoomRepository {
  constructor(firestore) {
    this.collection = firestore.collection('rooms');
  }

  async createRoom(data) {
    const entity = mapToEntity(Schemas.Room, data);
    const docRef = await this.collection.add(entity);
    return { id: docRef.id, ...entity };
  }

  async getRoomById(id) {
    const doc = await this.collection.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() };
  }

  async getAllRooms() {
    const snapshot = await this.collection.get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async getRoomsByOwner(ownerId) {
    const snapshot = await this.collection.where('ownerId', '==', ownerId).get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
}

class FirestoreRoomMembershipRepository {
  constructor(firestore) {
    this.collection = firestore.collection('memberships');
  }

  async createMembership(data) {
    const entity = mapToEntity(Schemas.RoomMembership, data);
    const docRef = await this.collection.add(entity);
    return { id: docRef.id, ...entity };
  }

  async getMembers(roomId) {
    const snapshot = await this.collection.where('roomId', '==', roomId).get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async getMembershipsForUser(userId) {
      const snapshot = await this.collection.where('userId', '==', userId).get();
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
}

class FirestoreSessionRepository {
  constructor(firestore) {
    this.collection = firestore.collection('sessions');
  }

  async createSession(data) {
    const entity = mapToEntity(Schemas.Session, data);
    const docRef = await this.collection.add(entity);
    return { id: docRef.id, ...entity };
  }

  async getSessionsForRoom(roomId) {
      const snapshot = await this.collection.where('roomId', '==', roomId).get();
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async getSessionsForUser(userId) {
      const snapshot = await this.collection.where('userId', '==', userId).get();
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
}

class FirestoreTaskRepository {
  constructor(firestore) {
    this.collection = firestore.collection('tasks');
  }

  async createTask(data) {
    const entity = mapToEntity(Schemas.Task, data);
    const docRef = await this.collection.add(entity);
    return { id: docRef.id, ...entity };
  }

  async getTaskById(id) {
    const doc = await this.collection.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() };
  }

  async updateTask(id, fields) {
      await this.collection.doc(id).update(fields);
      return this.getTaskById(id);
  }

  async deleteTask(id) {
      await this.collection.doc(id).delete();
  }

  async getTasksForUser(userId) {
    const snapshot = await this.collection.where('userId', '==', userId).get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
}

class FirestoreMessageRepository {
  constructor(firestore) {
    this.collection = firestore.collection('messages');
  }

  async createMessage(data) {
    const entity = mapToEntity(Schemas.Message, data);
    const docRef = await this.collection.add(entity);
    return { id: docRef.id, ...entity };
  }

  async getMessagesForRoom(roomId) {
    const snapshot = await this.collection
      .where('roomId', '==', roomId)
      .orderBy('createdAt', 'asc')
      .get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
}

// Initialize repositories
const userRepo = new FirestoreUserRepository(db);
const roomRepo = new FirestoreRoomRepository(db);
const membershipRepo = new FirestoreRoomMembershipRepository(db);
const sessionRepo = new FirestoreSessionRepository(db);
const taskRepo = new FirestoreTaskRepository(db);
const messageRepo = new FirestoreMessageRepository(db);

module.exports = {
  db, // export firestore instance if needed
  mapToEntity,
  Schemas,
  // Implementations
  FirestoreUserRepository,
  FirestoreRoomRepository,
  FirestoreRoomMembershipRepository,
  FirestoreSessionRepository,
  FirestoreTaskRepository,
  FirestoreMessageRepository,
  // Instances
  userRepo,
  roomRepo,
  membershipRepo,
  sessionRepo,
  taskRepo,
  messageRepo
};
