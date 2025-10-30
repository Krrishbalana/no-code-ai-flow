// frontend/src/api/api.js
import axios from "axios";

const API_BASE = "http://localhost:5001/api";

// Upload PDF and create embeddings
export async function uploadPDF(file) {
  const formData = new FormData();
  formData.append("file", file);
  const res = await axios.post(`${API_BASE}/pdfs/upload`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
}

// Save workflow definition
export async function saveWorkflow(data) {
  const res = await axios.post(`${API_BASE}/workflows`, data);
  return res.data;
}

// Load workflow list
export async function getWorkflows() {
  const res = await axios.get(`${API_BASE}/workflows`);
  return res.data;
}

// Execute workflow for a query
export async function executeWorkflow(query) {
  const res = await axios.post(`${API_BASE}/chat/execute`, { query });
  return res.data;
}
