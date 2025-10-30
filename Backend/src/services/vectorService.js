// backend/src/services/vectorService.js
import { generateEmbeddings } from "./openaiService.js";
import { cosineSimilarity } from "../utils/cosineSimilarity.js";

// Compare query embedding with all stored chunk embeddings
export const getRelevantChunks = async (query, documents) => {
  const queryEmbedding = (await generateEmbeddings([query]))[0];
  const allChunks = [];

  documents.forEach((doc) => {
    doc.chunks.forEach((chunk) => {
      const score = cosineSimilarity(queryEmbedding, chunk.embedding);
      allChunks.push({ text: chunk.text, score });
    });
  });

  const sorted = allChunks.sort((a, b) => b.score - a.score);
  return sorted.slice(0, 5);
};
