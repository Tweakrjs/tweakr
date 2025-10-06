import { isPositive } from "../../src/number/isPositive";

describe("isPositive", () => {
  it("should detect positive numbers", () => {
    expect(isPositive(5)).toBe(true);
    expect(isPositive(0)).toBe(false);
    expect(isPositive(-1)).toBe(false);
  });
});
