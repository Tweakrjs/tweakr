import { toRadians } from "../../src/number/toRadians";

describe("toRadians", () => {
  it.each([
    [180, Math.PI],
    [90, Math.PI / 2],
    [0, 0],
    [-180, -Math.PI],
    [360, 2 * Math.PI],
  ])("toRadians(%f) ≈ %f", (degrees, expected) => {
    expect(toRadians(degrees)).toBeCloseTo(expected);
  });

  it("should throw for non-finite numbers", () => {
    expect(() => toRadians(NaN)).toThrow();
    expect(() => toRadians(Infinity)).toThrow();
  });
});
