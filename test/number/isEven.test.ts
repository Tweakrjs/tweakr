import { isEven } from "../../src/number/isEven";

describe("isEven", () => {
  it("should detect even numbers", () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(3)).toBe(false);
  });
});
