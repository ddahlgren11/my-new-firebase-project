// Firestore Data Layer
const admin = require('firebase-admin');

// Simple ID generator (keeping original logic)
function generateId() {
  return Math.random().toString(36).slice(2, 9) + Date.now().toString(36);
}

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
    id: { default: () => generateId() },
    displayName: { default: "" },
    email: { default: "" },
    avatarUrl: { default: "" },
    createdAt: { default: () => Date.now() }
  },
  Room: {
    id: { default: () => generateId() },
    name: { default: "New Room" },
    description: { default: "" },
    ownerId: { default: null },
    createdAt: { default: () => Date.now() }
  },
  RoomMembership: {
    id: { default: () => generateId() },
    roomId: { default: null },
    userId: { default: null },
    role: { default: "member" }, // "member" | "admin"
    joinedAt: { default: () => Date.now() }
  },
  Session: {
    id: { default: () => generateId() },
    roomId: { default: null },
    userId: { default: null },
    startTime: { default: () => Date.now() },
    endTime: { default: null },
    mode: { default: "focus" }, // "focus" | "break"
    durationMinutes: { default: 25 },
    name: { default: "" },
    description: { default: "" }
  },
  Task: {
    id: { default: () => generateId() },
    userId: { default: null },
    roomId: { default: null }, // nullable
    title: { default: "" },
    completed: { default: false },
    createdAt: { default: () => Date.now() },
    completedAt: { default: null }
  },
  Message: {
    id: { default: () => generateId() },
    roomId: { default: null },
    userId: { default: null },
    text: { default: "" },
    createdAt: { default: () => Date.now() }
  }
};

// --- Interfaces ---
// Updated to return Promises (async)

class IUserRepository {
  async createUser(user) {}
  async getUserById(id) {}
  async updateUser(id, fields) {}
  async deleteUser(id) {}

  // Domain queries
  async getUserByEmail(email) {}
  async getUsersInRoom(roomId) {}
}

class IRoomRepository {
  async createRoom(room) {}
  async getRoomById(id) {}
  async updateRoom(id, fields) {}
  async deleteRoom(id) {}

  // Domain queries
  async getRoomsByOwner(ownerId) {}
  async getRoomsForUser(userId) {}
  async getAllRooms() {}
}

class IRoomMembershipRepository {
  async createMembership(membership) {}
  async getMembershipById(id) {}
  async updateMembership(id, fields) {}
  async deleteMembership(id) {}

  // Domain queries
  async getMembers(roomId) {}
}

class ISessionRepository {
  async createSession(session) {}
  async getSessionById(id) {}
  async updateSession(id, fields) {}
  async deleteSession(id) {}

  // Domain queries
  async getSessionsForRoom(roomId) {}
  async getSessionsForUser(userId) {}
}

class ITaskRepository {
  async createTask(task) {}
  async getTaskById(id) {}
  async updateTask(id, fields) {}
  async deleteTask(id) {}

  // Domain queries
  async getTasksForUser(userId) {}
  async getIncompleteTasks(userId) {}
  async getCompletedTasks(userId) {}
}

class IMessageRepository {
  async createMessage(message) {}
  async getMessageById(id) {}
  async updateMessage(id, fields) {}
  async deleteMessage(id) {}

  // Domain queries
  async getMessagesForRoom(roomId) {}
}

// --- Firestore Implementations ---

class FirestoreUserRepository extends IUserRepository {
  constructor(db) {
    super();
    this.collection = db.collection('users');
    this.memberships = db.collection('memberships');
  }

  async createUser(data) {
    const entity = mapToEntity(Schemas.User, data);
    await this.collection.doc(entity.id).set(entity);
    return entity;
  }

  async getUserById(id) {
    const doc = await this.collection.doc(id).get();
    return doc.exists ? doc.data() : null;
  }

  async updateUser(id, fields) {
    const ref = this.collection.doc(id);
    await ref.update(fields);
    const doc = await ref.get();
    return doc.data();
  }

  async deleteUser(id) {
    await this.collection.doc(id).delete();
  }

  async getUserByEmail(email) {
    const snapshot = await this.collection.where('email', '==', email).limit(1).get();
    if (snapshot.empty) return null;
    return snapshot.docs[0].data();
  }

  async getUsersInRoom(roomId) {
    // Join logic simulation: Get memberships -> Get Users
    const membershipSnapshot = await this.memberships.where('roomId', '==', roomId).get();
    const userIds = membershipSnapshot.docs.map(doc => doc.data().userId);

    if (userIds.length === 0) return [];

    // Firestore 'in' query supports up to 10 items. For simplicity/scalability in this demo, fetch individually or use batches.
    // For now, let's fetch all users and filter (not efficient but matches 'InMemory' logic spirit for "hold all my data" simply)
    // BETTER: Parallel fetch
    const userDocs = await Promise.all(userIds.map(uid => this.collection.doc(uid).get()));
    return userDocs.filter(doc => doc.exists).map(doc => doc.data());
  }
}

class FirestoreRoomRepository extends IRoomRepository {
  constructor(db) {
    super();
    this.collection = db.collection('rooms');
    this.memberships = db.collection('memberships');
  }

  async createRoom(data) {
    const entity = mapToEntity(Schemas.Room, data);
    await this.collection.doc(entity.id).set(entity);
    return entity;
  }

  async getRoomById(id) {
    const doc = await this.collection.doc(id).get();
    return doc.exists ? doc.data() : null;
  }

  async updateRoom(id, fields) {
    const ref = this.collection.doc(id);
    await ref.update(fields);
    const doc = await ref.get();
    return doc.data();
  }

  async deleteRoom(id) {
    await this.collection.doc(id).delete();
  }

  async getRoomsByOwner(ownerId) {
    const snapshot = await this.collection.where('ownerId', '==', ownerId).get();
    return snapshot.docs.map(doc => doc.data());
  }

  async getRoomsForUser(userId) {
    const membershipSnapshot = await this.memberships.where('userId', '==', userId).get();
    const roomIds = membershipSnapshot.docs.map(doc => doc.data().roomId);

    if (roomIds.length === 0) return [];

    // Parallel fetch
    const roomDocs = await Promise.all(roomIds.map(rid => this.collection.doc(rid).get()));
    return roomDocs.filter(doc => doc.exists).map(doc => doc.data());
  }

  async getAllRooms() {
    const snapshot = await this.collection.get();
    return snapshot.docs.map(doc => doc.data());
  }
}

class FirestoreRoomMembershipRepository extends IRoomMembershipRepository {
  constructor(db) {
    super();
    this.collection = db.collection('memberships');
  }

  async createMembership(data) {
    const entity = mapToEntity(Schemas.RoomMembership, data);
    await this.collection.doc(entity.id).set(entity);
    return entity;
  }

  async getMembershipById(id) {
    const doc = await this.collection.doc(id).get();
    return doc.exists ? doc.data() : null;
  }

  async updateMembership(id, fields) {
    const ref = this.collection.doc(id);
    await ref.update(fields);
    const doc = await ref.get();
    return doc.data();
  }

  async deleteMembership(id) {
    await this.collection.doc(id).delete();
  }

  async getMembers(roomId) {
    const snapshot = await this.collection.where('roomId', '==', roomId).get();
    return snapshot.docs.map(doc => doc.data());
  }
}

class FirestoreSessionRepository extends ISessionRepository {
  constructor(db) {
    super();
    this.collection = db.collection('sessions');
  }

  async createSession(data) {
    const entity = mapToEntity(Schemas.Session, data);
    await this.collection.doc(entity.id).set(entity);
    return entity;
  }

  async getSessionById(id) {
    const doc = await this.collection.doc(id).get();
    return doc.exists ? doc.data() : null;
  }

  async updateSession(id, fields) {
    const ref = this.collection.doc(id);
    await ref.update(fields);
    const doc = await ref.get();
    return doc.data();
  }

  async deleteSession(id) {
    await this.collection.doc(id).delete();
  }

  async getSessionsForRoom(roomId) {
    const snapshot = await this.collection.where('roomId', '==', roomId).get();
    return snapshot.docs.map(doc => doc.data());
  }

  async getSessionsForUser(userId) {
    const snapshot = await this.collection.where('userId', '==', userId).get();
    return snapshot.docs.map(doc => doc.data());
  }
}

class FirestoreTaskRepository extends ITaskRepository {
  constructor(db) {
    super();
    this.collection = db.collection('tasks');
  }

  async createTask(data) {
    const entity = mapToEntity(Schemas.Task, data);
    await this.collection.doc(entity.id).set(entity);
    return entity;
  }

  async getTaskById(id) {
    const doc = await this.collection.doc(id).get();
    return doc.exists ? doc.data() : null;
  }

  async updateTask(id, fields) {
    const ref = this.collection.doc(id);
    await ref.update(fields);
    const doc = await ref.get();
    return doc.data();
  }

  async deleteTask(id) {
    await this.collection.doc(id).delete();
  }

  async getTasksForUser(userId) {
    const snapshot = await this.collection.where('userId', '==', userId).get();
    return snapshot.docs.map(doc => doc.data());
  }

  async getIncompleteTasks(userId) {
    const snapshot = await this.collection
      .where('userId', '==', userId)
      .where('completed', '==', false)
      .get();
    return snapshot.docs.map(doc => doc.data());
  }

  async getCompletedTasks(userId) {
    const snapshot = await this.collection
      .where('userId', '==', userId)
      .where('completed', '==', true)
      .get();
    return snapshot.docs.map(doc => doc.data());
  }
}

class FirestoreMessageRepository extends IMessageRepository {
  constructor(db) {
    super();
    this.collection = db.collection('messages');
  }

  async createMessage(data) {
    const entity = mapToEntity(Schemas.Message, data);
    await this.collection.doc(entity.id).set(entity);
    return entity;
  }

  async getMessageById(id) {
    const doc = await this.collection.doc(id).get();
    return doc.exists ? doc.data() : null;
  }

  async updateMessage(id, fields) {
    const ref = this.collection.doc(id);
    await ref.update(fields);
    const doc = await ref.get();
    return doc.data();
  }

  async deleteMessage(id) {
    await this.collection.doc(id).delete();
  }

  async getMessagesForRoom(roomId) {
    const snapshot = await this.collection
      .where('roomId', '==', roomId)
      .orderBy('createdAt', 'asc')
      .get();
    return snapshot.docs.map(doc => doc.data());
  }
}

// Initialize repositories with Firestore
// Note: admin.initializeApp() must be called before this file is required,
// or at least before these instances are used.
const db = admin.firestore();

const userRepo = new FirestoreUserRepository(db);
const roomRepo = new FirestoreRoomRepository(db);
const membershipRepo = new FirestoreRoomMembershipRepository(db);
const sessionRepo = new FirestoreSessionRepository(db);
const taskRepo = new FirestoreTaskRepository(db);
const messageRepo = new FirestoreMessageRepository(db);

// Exports
module.exports = {
  db,
  mapToEntity,
  Schemas,
  // Interfaces
  IUserRepository,
  IRoomRepository,
  IRoomMembershipRepository,
  ISessionRepository,
  ITaskRepository,
  IMessageRepository,
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
