import { isFiniteNumber } from "../../src/number/isFiniteNumber";

describe("isFiniteNumber", () => {
  it("should detect finite numbers", () => {
    expect(isFiniteNumber(5)).toBe(true);
    expect(isFiniteNumber(Infinity)).toBe(false);
    expect(isFiniteNumber(NaN)).toBe(false);
  });
});
