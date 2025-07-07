import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/27017/cruds").then(() => {
      console.log("Database connected");
    });
  } catch {
    console.log("Database connection error: ", error.message);
  }
};

export default connectDB;
