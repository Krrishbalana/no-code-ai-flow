// backend/src/controllers/workflowController.js
import Workflow from "../models/Workflow.js";

export const getWorkflows = async (req, res) => {
  try {
    const data = await Workflow.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const saveWorkflow = async (req, res) => {
  try {
    const { name = "My Workflow", nodes, edges } = req.body;
    const wf = await Workflow.create({ name, nodes, edges });
    res.json(wf);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const validateWorkflow = async (req, res) => {
  try {
    const { nodes, edges } = req.body;
    const types = nodes.map((n) => n.type);
    if (!types.includes("userQuery"))
      return res
        .status(400)
        .json({ valid: false, msg: "Missing User Query node" });
    if (!types.includes("llmEngine"))
      return res
        .status(400)
        .json({ valid: false, msg: "Missing LLM Engine node" });
    if (!types.includes("output"))
      return res.status(400).json({ valid: false, msg: "Missing Output node" });
    res.json({ valid: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
