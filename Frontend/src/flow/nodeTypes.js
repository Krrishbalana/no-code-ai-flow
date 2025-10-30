// frontend/src/flow/nodeTypes.js
import UserQueryNode from "./CustomNodes/UserQueryNode.jsx";
import KnowledgeBaseNode from "./CustomNodes/KnowledgeBaseNode.jsx";
import LLMEngineNode from "./CustomNodes/LLMEngineNode.jsx";
import OutputNode from "./CustomNodes/OutputNode.jsx";

const nodeTypes = {
  userQuery: UserQueryNode,
  knowledgeBase: KnowledgeBaseNode,
  llmEngine: LLMEngineNode,
  output: OutputNode,
};
export default nodeTypes;
