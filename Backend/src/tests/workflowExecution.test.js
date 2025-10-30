// backend/src/tests/workflowExecution.test.js
import { chunkText } from "../utils/chunkText.js";

test("chunkText splits text into parts", () => {
  const text = "a ".repeat(1200);
  const chunks = chunkText(text, 500);
  expect(chunks.length).toBeGreaterThan(1);
});
