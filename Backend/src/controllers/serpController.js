// backend/src/controllers/serpController.js
import { getSerpResults } from "../services/serpService.js";

export const searchWeb = async (req, res) => {
  try {
    const { q } = req.query;
    const results = await getSerpResults(q);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
