// backend/src/models/Workflow.js
import mongoose from "mongoose";

const nodeSchema = new mongoose.Schema({
  id: String,
  type: String,
  position: Object,
  data: Object,
});

const edgeSchema = new mongoose.Schema({
  id: String,
  source: String,
  target: String,
});

const workflowSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    nodes: [nodeSchema],
    edges: [edgeSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Workflow", workflowSchema);
