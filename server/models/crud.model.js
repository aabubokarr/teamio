import mongoose from "mongoose";

const crudSchema = new mongoose.Schema(
  {
    CrudName: {
      type: String,
      required: true,
    },
    CrudDesc: {
      type: String,
      required: true,
    },
    CrudNumber: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Crud = mongoose.model("crud", crudSchema);

export default Crud;
