import { isInteger } from "../../src/number/isInteger";

describe("isInteger", () => {
  it("should detect integers", () => {
    expect(isInteger(5)).toBe(true);
    expect(isInteger(5.5)).toBe(false);
  });
});
