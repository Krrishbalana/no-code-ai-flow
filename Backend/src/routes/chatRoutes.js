// backend/src/routes/chatRoutes.js
import express from "express";
import { executeChat } from "../controllers/chatController.js";

const router = express.Router();
router.post("/execute", executeChat);

export default router;
