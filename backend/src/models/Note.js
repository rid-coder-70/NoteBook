import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,   // ✅ Capitalized String
      required: true,
    },
    content: {
      type: String,   // ✅ Capitalized String
      required: true,
    },
  },
  { timestamps: true } // ✅ createdAt, updatedAt
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
