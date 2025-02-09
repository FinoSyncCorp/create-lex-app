import mongoose from "mongoose";

const MONGO_URI = import.meta.env.VITE_MONGO_URI as string;

if (!MONGO_URI) {
  throw new Error("⚠️ MONGO_URI is missing in .env file");
}

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      dbName: "lexapp", // Default database name
    });
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Failed:", err);
    process.exit(1);
  }
};
