import { max } from "../../src/number/max";

describe("max", () => {
  it("should return maximum value", () => {
    expect(max([1, 5, 3])).toBe(5);
    expect(max([-1, -5, -3])).toBe(-1);
  });
});
