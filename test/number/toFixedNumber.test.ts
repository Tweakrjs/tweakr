import { toFixedNumber } from "../../src/number/toFixedNumber";

describe("toFixedNumber", () => {
  it.each([
    [1.2345, 2, 1.23],
    [1.236, 2, 1.24],
    [1.2, undefined, 1.2],
    [-1.235, 2, -1.24],
    [123.456789, 4, 123.4568],
    [0.0001234, 6, 0.000123],
  ])("should round %f to %d decimals = %f", (value, decimals, expected) => {
    expect(toFixedNumber(value, decimals as number | undefined)).toBe(expected);
  });

  it("should return non-finite numbers as-is", () => {
    expect(toFixedNumber(NaN)).toBeNaN();
    expect(toFixedNumber(Infinity)).toBe(Infinity);
    expect(toFixedNumber(-Infinity)).toBe(-Infinity);
  });
});
