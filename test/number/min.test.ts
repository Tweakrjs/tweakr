import { min } from "../../src/number/min";

describe("min", () => {
  it("should return minimum value", () => {
    expect(min([1, 5, 3])).toBe(1);
    expect(min([-1, -5, -3])).toBe(-5);
  });
});
