// backend/src/services/serpService.js
import axios from "axios";

export const getSerpResults = async (query) => {
  if (!process.env.SERPAPI_KEY) return { error: "SERPAPI_KEY not configured" };
  const url = `https://serpapi.com/search.json?q=${encodeURIComponent(
    query
  )}&api_key=${process.env.SERPAPI_KEY}`;
  const res = await axios.get(url);
  return res.data.organic_results || [];
};
