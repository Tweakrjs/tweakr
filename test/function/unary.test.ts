import { unary } from "../../src/function/unary";

describe("unary", () => {
  it("should accept only one argument", () => {
    const fn = unary((x) => x);
    expect(fn(1)).toBe(1);
  });
});
