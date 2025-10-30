// backend/src/routes/workflowRoutes.js
import express from "express";
import {
  getWorkflows,
  saveWorkflow,
  validateWorkflow,
} from "../controllers/workflowController.js";

const router = express.Router();

router.get("/", getWorkflows);
router.post("/", saveWorkflow);
router.post("/validate", validateWorkflow);

export default router;
