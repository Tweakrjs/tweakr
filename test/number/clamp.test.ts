import { clamp } from "../../src/number/clamp";

describe("clamp", () => {
  it("should clamp value within range", () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(-1, 0, 10)).toBe(0);
    expect(clamp(12, 0, 10)).toBe(10);
  });
});
