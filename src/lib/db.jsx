import mongoose from "mongoose";

// Ensure the MONGODB_URI environment variable is defined
if (!process.env.MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

// Set up global caching to prevent multiple connections in development
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  // If connection is already cached, return the cached connection
  if (cached.conn) {
    return cached.conn;
  }

  // If no promise exists, create a new one and establish the connection
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      connectTimeoutMS: 30000, // Set a 30-second connection timeout
    };

    cached.promise = mongoose.connect(process.env.MONGODB_URI, opts);
  }

  try {
    // Await the connection and cache it
    cached.conn = await cached.promise;
    console.log("DB connected");
  } catch (error) {
    // If the connection fails, reset the promise and throw the error
    cached.promise = null;
    throw new Error("MongoDB connection error: " + error.message);
  }

  return cached.conn;
}

export default dbConnect;
