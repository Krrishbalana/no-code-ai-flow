// backend/src/routes/serpRoutes.js
import express from "express";
import { searchWeb } from "../controllers/serpController.js";

const router = express.Router();
router.get("/search", searchWeb);

export default router;
