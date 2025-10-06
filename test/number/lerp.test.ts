import { lerp } from "../../src/number/lerp";

describe("lerp", () => {
  it("should linearly interpolate between numbers", () => {
    expect(lerp(0, 10, 0.5)).toBe(5);
    expect(lerp(5, 15, 0)).toBe(5);
    expect(lerp(5, 15, 1)).toBe(15);
  });
});
