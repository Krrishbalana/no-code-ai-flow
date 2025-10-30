// backend/src/controllers/chatController.js
import Chat from "../models/Chat.js";
import Document from "../models/Document.js";
import { getRelevantChunks } from "../services/vectorService.js";
import { callOpenAI } from "../services/openaiService.js";

export const executeChat = async (req, res) => {
  try {
    const { query } = req.body;

    // Retrieve context from documents
    const docs = await Document.find();
    let context = "";
    if (docs.length > 0) {
      const topChunks = await getRelevantChunks(query, docs);
      context = topChunks.map((c) => c.text).join("\n");
    }

    // Call LL
    const response = await callOpenAI(query, context);

    // Save chat history
    const chat = await Chat.create({
      messages: [
        { sender: "user", text: query },
        { sender: "bot", text: response },
      ],
    });

    res.json({ response, chatId: chat._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
