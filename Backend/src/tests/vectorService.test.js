// backend/src/tests/vectorService.test.js
import { cosineSimilarity } from "../utils/cosineSimilarity.js";

test("cosine similarity returns high score for similar vectors", () => {
  const a = [1, 1, 1];
  const b = [1, 1, 1];
  expect(cosineSimilarity(a, b)).toBeCloseTo(1);
});

test("cosine similarity returns low score for opposite vectors", () => {
  const a = [1, 0];
  const b = [0, 1];
  expect(cosineSimilarity(a, b)).toBeCloseTo(0);
});
