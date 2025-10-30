// backend/src/models/Chat.js
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  sender: String, // 'user' or 'bot'
  text: String,
  createdAt: { type: Date, default: Date.now },
});

const chatSchema = new mongoose.Schema(
  {
    workflowId: { type: mongoose.Schema.Types.ObjectId, ref: "Workflow" },
    messages: [messageSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Chat", chatSchema);
