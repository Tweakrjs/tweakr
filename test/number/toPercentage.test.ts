import { toPercentage } from "../../src/number/toPercentage";

describe("toPercentage", () => {
  it("should calculate percentage", () => {
    expect(toPercentage(50, 200)).toBe(25);
    expect(toPercentage(0, 100)).toBe(0);
    expect(toPercentage(5, 0)).toBe(0);
  });
});
