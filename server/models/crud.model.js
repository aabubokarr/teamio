import mongoose from "mongoose";

const crudSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true
    },
    number: {
      type: Number,
      required: [true, "Number is required"],
      min: [0, "Number must be positive"]
    },
  },
  { timestamps: true }
);

const Crud = mongoose.model("Crud", crudSchema);

export default Crud;
