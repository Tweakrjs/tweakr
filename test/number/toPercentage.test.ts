import { toPercentage } from "../../src/number/toPercentage";

describe("toPercentage", () => {
  it.each([
    [50, 200, undefined, 25],
    [0, 100, undefined, 0],
    [5, 0, undefined, 0],
    [25, 50, 1, 50],
    [33, 66, 0, 50],
    [-20, 100, 2, -20],
    [0.123, 0.456, 3, 26.974],
  ])(
    "should calculate percentage of %f/%f with %d decimals = %f",
    (value, total, decimals, expected) => {
      expect(
        toPercentage(value, total, decimals as number | undefined)
      ).toBeCloseTo(expected);
    }
  );

  it("should handle very large numbers", () => {
    expect(toPercentage(1e10, 2e10)).toBe(50);
  });

  it("should handle negative totals", () => {
    expect(toPercentage(50, -200)).toBe(-25);
  });
});
