import { isNegative } from "../../src/number/isNegative";

describe("isNegative", () => {
  it("should detect negative numbers", () => {
    expect(isNegative(-1)).toBe(true);
    expect(isNegative(0)).toBe(false);
  });
});
