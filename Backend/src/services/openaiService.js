// backend/src/services/openaiService.js
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Generate embeddings for an array of text chunks
export const generateEmbeddings = async (chunks) => {
  const results = [];
  for (const text of chunks) {
    const res = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: text,
    });
    results.push(res.data[0].embedding);
  }
  return results;
};

// Call LLM with query + optional context
export const callOpenAI = async (query, context = "") => {
  const systemPrompt = context
    ? `Use this context to answer:\n${context}`
    : "Answer naturally as a helpful assistant.";

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: query },
    ],
  });

  return completion.choices[0].message.content.trim();
};
