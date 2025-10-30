// backend/src/models/Document.js
import mongoose from "mongoose";

const chunkSchema = new mongoose.Schema({
  text: String,
  embedding: [Number],
});

const documentSchema = new mongoose.Schema(
  {
    name: String,
    text: String,
    chunks: [chunkSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Document", documentSchema);
