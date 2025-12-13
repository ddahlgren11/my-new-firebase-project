const admin = require("firebase-admin");

// Ensure admin is initialized (it might be initialized in index.js, but good to have access to firestore here)
// Note: We rely on the caller (index.js) to have called admin.initializeApp()
// or we can call it here if not already. Ideally pass the db instance.
// But typically for this structure, we can just use admin.firestore().

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

// Schemas (Reuse existing schema logic for default values)
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
  // ... other schemas omitted for brevity if not used, but good to keep structure
};

// --- Implementations ---

class FirestoreRoomRepository {
  constructor(firestore) {
    this.collection = firestore.collection('rooms');
  }

  async createRoom(data) {
    // Apply defaults
    const entity = mapToEntity(Schemas.Room, data);
    const docRef = await this.collection.add(entity);
    return { id: docRef.id, ...entity };
  }

  async getRoomById(id) {
    const doc = await this.collection.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() };
  }

  async getRoomsByOwner(ownerId) {
    const snapshot = await this.collection.where('ownerId', '==', ownerId).get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  // Getting rooms for a user is complex in Firestore without a join.
  // We usually query memberships first.
  async getRoomsForUser(userId) {
     // This would require a separate query. For now, we might leave this to the service layer
     // or implement a helper that queries memberships then rooms.
     // Or we can return all rooms for the MVP as discussed.
     const snapshot = await this.collection.get();
     return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  // Method to get ALL rooms (for the MVP "make it work" visibility)
  async getAllRooms() {
      const snapshot = await this.collection.get();
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
}

class FirestoreUserRepository {
    constructor(firestore) {
        this.collection = firestore.collection('users');
    }
}

// Initialize repositories
const roomRepo = new FirestoreRoomRepository(db);
const membershipRepo = new FirestoreRoomMembershipRepository(db);
const sessionRepo = new FirestoreSessionRepository(db);
const userRepo = new FirestoreUserRepository(db);

module.exports = {
  roomRepo,
  membershipRepo,
  sessionRepo,
  userRepo
};
