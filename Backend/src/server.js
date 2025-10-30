// backend/src/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

// Routes
import workflowRoutes from "./routes/workflowRoutes.js";
import pdfRoutes from "./routes/pdfRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import serpRoutes from "./routes/serpRoutes.js";

dotenv.config();
const app = express();

// Middlewares
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

// API Routes
app.use("/api/workflows", workflowRoutes);
app.use("/api/pdfs", pdfRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/serp", serpRoutes);

app.get("/", (req, res) => res.send("Workflow Builder API running ✅"));

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
