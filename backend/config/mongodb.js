import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectdb = async () => {
  try {
    console.log("🔍 Starting MongoDB connection...");

    // Check env
    if (!process.env.MONGO_URI) {
      console.error("❌ MONGO_URI is missing in .env");
      throw new Error("MONGO_URI environment variable is not defined");
    }

    // Hide password for safety in logs
    // const safeURI = process.env.MONGO_URI.replace(/\/\/(.*):(.*)@/, "//****:****@");
    console.log("📡 Mongo URI:", process.env.MONGO_URI);

    console.log("⏳ Attempting to connect to MongoDB...");

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    });

    console.log("🎉 MongoDB connection SUCCESS");
    console.log(`🌐 Host: ${conn.connection.host}`);
    console.log(`📂 DB Name: ${conn.connection.name}`);
    console.log(`🔌 Ready State: ${conn.connection.readyState}`); // 1 = connected

    // Connection events
    mongoose.connection.on("connecting", () => {
      console.log("🔄 MongoDB connecting...");
    });

    mongoose.connection.on("connected", () => {
      console.log("✅ MongoDB connected event fired");
    });

    mongoose.connection.on("open", () => {
      console.log("📂 MongoDB connection open");
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB connection error event:", err.message);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("⚠️ MongoDB disconnected");
    });

    mongoose.connection.on("reconnected", () => {
      console.log("🔄 MongoDB reconnected");
    });

    mongoose.connection.on("close", () => {
      console.log("🔒 MongoDB connection closed");
    });

    // Graceful shutdown
    process.on("SIGINT", async () => {
      try {
        console.log("🛑 SIGINT received. Closing MongoDB...");
        await mongoose.connection.close();
        console.log("✅ MongoDB connection closed due to app termination");
        process.exit(0);
      } catch (closeErr) {
        console.error("❌ Error closing MongoDB connection:", closeErr.message);
        process.exit(1);
      }
    });

    return conn;

  } catch (error) {
    console.error("🚨 MongoDB CONNECTION FAILED");
    console.error("👉 Error Message:", error.message);
    console.error("👉 Full Error:", error);

    if (process.env.NODE_ENV === "production") {
      console.log("🔄 Retrying connection in 5 seconds...");
      setTimeout(() => connectdb(), 5000);
    } else {
      console.error("⚠️ Development mode: MongoDB connection failed");
      throw error;
    }
  }
};

export default connectdb;