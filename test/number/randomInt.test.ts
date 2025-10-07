import { describe, it, expect } from "vitest";
import { randomInt } from "../../src/number/randomInt";

describe("randomInt", () => {
  it("returns a number within the range", () => {
    for (let i = 0; i < 50; i++) {
      const val = randomInt(1, 10);
      expect(val).toBeGreaterThanOrEqual(1);
      expect(val).toBeLessThanOrEqual(10);
    }
  });
});
