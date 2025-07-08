import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/cruds");
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection error: ", error.message);
    process.exit(1);
  }
};

export default connectDB;
