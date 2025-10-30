// backend/src/seed/seedSampleDocs.js
import dotenv from "dotenv";
import { connectDB } from "../config/db.js";
import Document from "../models/Document.js";
import { generateEmbeddings } from "../services/openaiService.js";
dotenv.config();

const sampleText =
  "JavaScript is a versatile programming language used for web development. React and Node.js are popular frameworks built on it.";

(async () => {
  try {
    await connectDB();
    const chunks = [sampleText];
    const embeddings = await generateEmbeddings(chunks);

    const doc = await Document.create({
      name: "sample.txt",
      text: sampleText,
      chunks: [{ text: sampleText, embedding: embeddings[0] }],
    });

    console.log("✅ Seeded sample document:", doc._id);
    process.exit(0);
  } catch (err) {
    console.error("❌ Seed failed:", err.message);
    process.exit(1);
  }
})();
