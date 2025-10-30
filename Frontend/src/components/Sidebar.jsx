// frontend/src/components/Sidebar.jsx
import React from "react";

export default function Sidebar() {
  const components = [
    { name: "User Query", type: "userQuery" },
    { name: "Knowledge Base", type: "knowledgeBase" },
    { name: "LLM Engine", type: "llmEngine" },
    { name: "Output", type: "output" },
  ];

  return (
    <div className="w-full md:w-60 bg-white border-r shadow-sm p-4 flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto">
      <h2 className="text-xl font-semibold mb-2">Components</h2>
      {components.map((c) => (
        <div
          key={c.type}
          draggable
          onDragStart={(e) =>
            e.dataTransfer.setData("application/reactflow", c.type)
          }
          className="cursor-grab select-none p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition text-center text-sm font-medium"
        >
          {c.name}
        </div>
      ))}
    </div>
  );
}
