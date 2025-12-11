// In-memory database
const db = {
  users: {},
  rooms: {},
  memberships: {},
  sessions: {},
  tasks: {},
  messages: {}
};

// Simple ID generator
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
    durationMinutes: { default: 25 }
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

class IUserRepository {
  createUser(user) {}
  getUserById(id) {}
  updateUser(id, fields) {}
  deleteUser(id) {}
  
  // Domain queries
  getUserByEmail(email) {}
  getUsersInRoom(roomId) {}
}

class IRoomRepository {
  createRoom(room) {}
  getRoomById(id) {}
  updateRoom(id, fields) {}
  deleteRoom(id) {}

  // Domain queries
  getRoomsByOwner(ownerId) {}
  getRoomsForUser(userId) {}
}

class IRoomMembershipRepository {
  createMembership(membership) {}
  getMembershipById(id) {}
  updateMembership(id, fields) {}
  deleteMembership(id) {}

  // Domain queries
  getMembers(roomId) {}
}

class ISessionRepository {
  createSession(session) {}
  getSessionById(id) {}
  updateSession(id, fields) {}
  deleteSession(id) {}

  // Domain queries
  getSessionsForRoom(roomId) {}
  getSessionsForUser(userId) {}
}

class ITaskRepository {
  createTask(task) {}
  getTaskById(id) {}
  updateTask(id, fields) {}
  deleteTask(id) {}

  // Domain queries
  getTasksForUser(userId) {}
  getIncompleteTasks(userId) {}
  getCompletedTasks(userId) {}
}

class IMessageRepository {
  createMessage(message) {}
  getMessageById(id) {}
  updateMessage(id, fields) {}
  deleteMessage(id) {}

  // Domain queries
  getMessagesForRoom(roomId) {}
}

// --- Implementations ---

class InMemoryUserRepository extends IUserRepository {
  constructor(database) {
    super();
    this.db = database.users;
    // Need access to memberships for join queries
    this.membershipDb = database.memberships;
  }

  createUser(data) {
    const entity = mapToEntity(Schemas.User, data);
    this.db[entity.id] = entity;
    return entity;
  }

  getUserById(id) {
    return this.db[id] || null;
  }

  updateUser(id, fields) {
    if (!this.db[id]) return null;
    this.db[id] = { ...this.db[id], ...fields };
    return this.db[id];
  }

  deleteUser(id) {
    delete this.db[id];
  }

  getUserByEmail(email) {
    return Object.values(this.db).find(u => u.email === email) || null;
  }

  getUsersInRoom(roomId) {
    const userIds = Object.values(this.membershipDb)
      .filter(m => m.roomId === roomId)
      .map(m => m.userId);
    
    return userIds.map(uid => this.db[uid]).filter(u => u !== undefined);
  }
}

class InMemoryRoomRepository extends IRoomRepository {
  constructor(database) {
    super();
    this.db = database.rooms;
    this.membershipDb = database.memberships;
  }

  createRoom(data) {
    const entity = mapToEntity(Schemas.Room, data);
    this.db[entity.id] = entity;
    return entity;
  }

  getRoomById(id) {
    return this.db[id] || null;
  }

  updateRoom(id, fields) {
    if (!this.db[id]) return null;
    this.db[id] = { ...this.db[id], ...fields };
    return this.db[id];
  }

  deleteRoom(id) {
    delete this.db[id];
  }

  getRoomsByOwner(ownerId) {
    return Object.values(this.db).filter(r => r.ownerId === ownerId);
  }

  getRoomsForUser(userId) {
    const roomIds = Object.values(this.membershipDb)
        .filter(m => m.userId === userId)
        .map(m => m.roomId);
    
    return roomIds.map(rid => this.db[rid]).filter(r => r !== undefined);
  }
}

class InMemoryRoomMembershipRepository extends IRoomMembershipRepository {
  constructor(database) {
    super();
    this.db = database.memberships;
    this.userDb = database.users;
  }

  createMembership(data) {
    const entity = mapToEntity(Schemas.RoomMembership, data);
    this.db[entity.id] = entity;
    return entity;
  }

  getMembershipById(id) {
    return this.db[id] || null;
  }

  updateMembership(id, fields) {
    if (!this.db[id]) return null;
    this.db[id] = { ...this.db[id], ...fields };
    return this.db[id];
  }

  deleteMembership(id) {
    delete this.db[id];
  }

  getMembers(roomId) {
    return Object.values(this.db).filter(m => m.roomId === roomId);
  }
}

class InMemorySessionRepository extends ISessionRepository {
  constructor(database) {
    super();
    this.db = database.sessions;
  }

  createSession(data) {
    const entity = mapToEntity(Schemas.Session, data);
    this.db[entity.id] = entity;
    return entity;
  }

  getSessionById(id) {
    return this.db[id] || null;
  }

  updateSession(id, fields) {
    if (!this.db[id]) return null;
    this.db[id] = { ...this.db[id], ...fields };
    return this.db[id];
  }

  deleteSession(id) {
    delete this.db[id];
  }

  getSessionsForRoom(roomId) {
    return Object.values(this.db).filter(s => s.roomId === roomId);
  }

  getSessionsForUser(userId) {
    return Object.values(this.db).filter(s => s.userId === userId);
  }
}

class InMemoryTaskRepository extends ITaskRepository {
  constructor(database) {
    super();
    this.db = database.tasks;
  }

  createTask(data) {
    const entity = mapToEntity(Schemas.Task, data);
    this.db[entity.id] = entity;
    return entity;
  }

  getTaskById(id) {
    return this.db[id] || null;
  }

  updateTask(id, fields) {
    if (!this.db[id]) return null;
    this.db[id] = { ...this.db[id], ...fields };
    return this.db[id];
  }

  deleteTask(id) {
    delete this.db[id];
  }

  getTasksForUser(userId) {
    return Object.values(this.db).filter(t => t.userId === userId);
  }

  getIncompleteTasks(userId) {
    return Object.values(this.db).filter(t => t.userId === userId && !t.completed);
  }

  getCompletedTasks(userId) {
    return Object.values(this.db).filter(t => t.userId === userId && t.completed);
  }
}

class InMemoryMessageRepository extends IMessageRepository {
  constructor(database) {
    super();
    this.db = database.messages;
  }

  createMessage(data) {
    const entity = mapToEntity(Schemas.Message, data);
    this.db[entity.id] = entity;
    return entity;
  }

  getMessageById(id) {
    return this.db[id] || null;
  }

  updateMessage(id, fields) {
    if (!this.db[id]) return null;
    this.db[id] = { ...this.db[id], ...fields };
    return this.db[id];
  }

  deleteMessage(id) {
    delete this.db[id];
  }

  getMessagesForRoom(roomId) {
    return Object.values(this.db).filter(m => m.roomId === roomId).sort((a, b) => a.createdAt - b.createdAt);
  }
}

// Initialize repositories
const userRepo = new InMemoryUserRepository(db);
const roomRepo = new InMemoryRoomRepository(db);
const membershipRepo = new InMemoryRoomMembershipRepository(db);
const sessionRepo = new InMemorySessionRepository(db);
const taskRepo = new InMemoryTaskRepository(db);
const messageRepo = new InMemoryMessageRepository(db);

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
  InMemoryUserRepository,
  InMemoryRoomRepository,
  InMemoryRoomMembershipRepository,
  InMemorySessionRepository,
  InMemoryTaskRepository,
  InMemoryMessageRepository,
  // Instances
  userRepo,
  roomRepo,
  membershipRepo,
  sessionRepo,
  taskRepo,
  messageRepo
};
