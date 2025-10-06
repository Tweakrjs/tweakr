import { random } from "../../src/number/random";

describe("random", () => {
  it("should generate numbers within range", () => {
    for (let i = 0; i < 10; i++) {
      const r = random(1, 10);
      expect(r).toBeGreaterThanOrEqual(1);
      expect(r).toBeLessThan(10);
    }
  });

  it("should generate integer numbers", () => {
    for (let i = 0; i < 10; i++) {
      const r = random(1, 10, true);
      expect(Number.isInteger(r)).toBe(true);
    }
  });
});
