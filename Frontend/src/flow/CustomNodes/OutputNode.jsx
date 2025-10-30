// frontend/src/flow/CustomNodes/OutputNode.jsx
import React from "react";
export default function OutputNode({ data }) {
  return (
    <div className="p-3 bg-yellow-50 border-2 border-yellow-400 rounded-xl shadow-sm text-center text-sm">
      <p className="font-semibold text-yellow-800">Output</p>
      <p className="text-gray-600 text-xs">Shows final answer</p>
    </div>
  );
}
