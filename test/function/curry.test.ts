import { curry } from "../../src/function/curry";

describe("curry", () => {
  it("should support partial application", () => {
    const add = (a: number, b: number, c: number) => a + b + c;
    const curried = curry(add);
    expect(curried(1)(2)(3)).toBe(6);
  });
});
