// backend/src/routes/pdfRoutes.js
import express from "express";
import multer from "multer";
import { uploadAndProcessPDF } from "../controllers/pdfController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), uploadAndProcessPDF);

export default router;
