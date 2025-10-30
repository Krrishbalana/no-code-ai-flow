// frontend/src/flow/CustomNodes/UserQueryNode.jsx
import React from "react";
export default function UserQueryNode({ data }) {
  return (
    <div className="p-3 bg-blue-50 border-2 border-blue-400 rounded-xl shadow-sm text-center text-sm">
      <p className="font-semibold text-blue-800">User Query</p>
      <p className="text-gray-600 text-xs">{data.label}</p>
    </div>
  );
}
