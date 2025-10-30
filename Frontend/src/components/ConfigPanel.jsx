// frontend/src/components/ConfigPanel.jsx
import React from "react";

export default function ConfigPanel({ selectedNode }) {
  if (!selectedNode)
    return (
      <div className="hidden md:flex md:w-64 bg-white border-l shadow-sm items-center justify-center text-gray-500">
        Select a node
      </div>
    );

  const renderConfig = () => {
    switch (selectedNode.type) {
      case "userQuery":
        return (
          <>
            <label className="font-medium text-sm">Placeholder:</label>
            <input
              type="text"
              className="border rounded-md p-2 w-full"
              placeholder="Ask something..."
            />
          </>
        );
      case "knowledgeBase":
        return (
          <>
            <label className="font-medium text-sm">Upload PDF:</label>
            <input
              type="file"
              accept=".pdf"
              className="border rounded-md p-2 w-full"
            />
            <button className="mt-3 px-3 py-2 bg-blue-600 text-white rounded-md">
              Upload & Process
            </button>
          </>
        );
      case "llmEngine":
        return (
          <>
            <label className="font-medium text-sm">Custom Prompt:</label>
            <textarea
              className="border rounded-md p-2 w-full"
              placeholder="e.g., Answer concisely"
              rows="3"
            />
          </>
        );
      case "output":
        return (
          <p className="text-sm text-gray-500">No configuration needed.</p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="hidden md:flex md:w-64 bg-white border-l shadow-sm flex-col p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Config Panel</h2>
      {renderConfig()}
    </div>
  );
}
