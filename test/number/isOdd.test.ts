import { isOdd } from "../../src/number/isOdd";

describe("isOdd", () => {
  it("should detect odd numbers", () => {
    expect(isOdd(3)).toBe(true);
    expect(isOdd(4)).toBe(false);
  });
});
