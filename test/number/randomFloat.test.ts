import { describe, it, expect } from "vitest";
import { randomFloat } from "../../src/number/randomFloat";

describe("randomFloat", () => {
  it("returns a float within the range", () => {
    for (let i = 0; i < 50; i++) {
      const val = randomFloat(1, 5);
      expect(val).toBeGreaterThanOrEqual(1);
      expect(val).toBeLessThan(5);
    }
  });
});
