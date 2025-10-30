// backend/src/controllers/pdfController.js
import fs from "fs";
import pdf from "pdf-parse";
import Document from "../models/Document.js";
import { generateEmbeddings } from "../services/openaiService.js";
import { chunkText } from "../utils/chunkText.js";

export const uploadAndProcessPDF = async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ error: "No file uploaded" });

    const dataBuffer = fs.readFileSync(file.path);
    const parsed = await pdf(dataBuffer);
    const text = parsed.text;

    const chunks = chunkText(text);
    const embeddings = await generateEmbeddings(chunks);

    const chunkData = chunks.map((text, i) => ({
      text,
      embedding: embeddings[i],
    }));

    const doc = await Document.create({
      name: file.originalname,
      text,
      chunks: chunkData,
    });

    fs.unlinkSync(file.path); // cleanup temp file
    res.json({ message: "PDF processed", documentId: doc._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
