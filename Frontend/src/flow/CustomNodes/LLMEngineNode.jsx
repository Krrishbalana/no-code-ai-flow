// frontend/src/flow/CustomNodes/LLMEngineNode.jsx
import React from "react";
export default function LLMEngineNode({ data }) {
  return (
    <div className="p-3 bg-green-50 border-2 border-green-400 rounded-xl shadow-sm text-center text-sm">
      <p className="font-semibold text-green-800">LLM Engine</p>
      <p className="text-gray-600 text-xs">Generates responses</p>
    </div>
  );
}
