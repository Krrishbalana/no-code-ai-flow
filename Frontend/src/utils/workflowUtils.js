// frontend/src/utils/workflowUtils.js

// Simple local validation of workflow graph before save
export function validateWorkflow(nodes, edges) {
  const types = nodes.map((n) => n.type);
  if (!types.includes("userQuery")) throw new Error("Missing User Query node");
  if (!types.includes("llmEngine")) throw new Error("Missing LLM Engine node");
  if (!types.includes("output")) throw new Error("Missing Output node");

  const hasFlow =
    edges.some((e) => e.source.includes("userQuery")) &&
    edges.some((e) => e.target.includes("output"));

  if (!hasFlow)
    throw new Error("Nodes must connect from User Query → LLM Engine → Output");
  return true;
}

// Convert nodes/edges to backend-friendly structure
export function serializeWorkflow(nodes, edges) {
  return {
    nodes: nodes.map((n) => ({
      id: n.id,
      type: n.type,
      position: n.position,
      data: n.data,
    })),
    edges: edges.map((e) => ({
      id: e.id,
      source: e.source,
      target: e.target,
    })),
  };
}
