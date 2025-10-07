import { toDegrees } from "../../src/number/toDegrees";

describe("toDegrees", () => {
  it.each([
    [Math.PI, 180],
    [Math.PI / 2, 90],
    [0, 0],
    [-Math.PI, -180],
    [2 * Math.PI, 360],
  ])("toDegrees(%f) ≈ %f", (radians, expected) => {
    expect(toDegrees(radians)).toBeCloseTo(expected);
  });

  it("should throw for non-finite numbers", () => {
    expect(() => toDegrees(NaN)).toThrow();
    expect(() => toDegrees(Infinity)).toThrow();
  });
});
