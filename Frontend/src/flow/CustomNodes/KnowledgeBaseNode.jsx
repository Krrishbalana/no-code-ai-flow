// frontend/src/flow/CustomNodes/KnowledgeBaseNode.jsx
import React from "react";
export default function KnowledgeBaseNode({ data }) {
  return (
    <div className="p-3 bg-purple-50 border-2 border-purple-400 rounded-xl shadow-sm text-center text-sm">
      <p className="font-semibold text-purple-800">Knowledge Base</p>
      <p className="text-gray-600 text-xs">Embeddings & PDFs</p>
    </div>
  );
}
