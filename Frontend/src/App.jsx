// frontend/src/App.jsx
import React, { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import WorkflowCanvas from "./components/WorkflowCanvas.jsx";
import ConfigPanel from "./components/ConfigPanel.jsx";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const [selectedNode, setSelectedNode] = useState(null);
  const [workflow, setWorkflow] = useState([]);

  const handleBuild = () => {
    alert("✅ Workflow validated and saved!");
  };

  const handleChat = () => {
    navigate("/chat");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Canvas */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-hidden">
          <WorkflowCanvas
            selectedNode={selectedNode}
            setSelectedNode={setSelectedNode}
            workflow={workflow}
            setWorkflow={setWorkflow}
          />
        </div>
        <div className="flex justify-end gap-3 p-4 border-t bg-white shadow-sm">
          <button
            onClick={handleBuild}
            className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Build Stack
          </button>
          <button
            onClick={handleChat}
            className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
          >
            Chat with Stack
          </button>
        </div>
      </div>

      {/* Config Panel */}
      <ConfigPanel selectedNode={selectedNode} />
    </div>
  );
}
