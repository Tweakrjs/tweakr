import { describe, it, expect } from "vitest";
import { curry } from "../../src/function/curry";

describe("curry", () => {
  it("should support partial application", () => {
    const add = (a: number, b: number, c: number) => a + b + c;
    const curried = curry(add);
    expect(curried(1)(2)(3)).toBe(6);
    expect(curried(1, 2)(3)).toBe(6);
    expect(curried(1)(2, 3)).toBe(6);
  });

  it("should handle full arity in a single call", () => {
    const add = (a: number, b: number, c: number) => a + b + c;
    const curried = curry(add);
    expect(curried(1, 2, 3)).toBe(6);
  });

  it("should handle rest parameters correctly", () => {
    const join = curry((a: string, b: string, ...rest: string[]) =>
      [a, b, ...rest].join("-")
    );
    expect(join("a")("b")("c", "d")).toBe("a-b-c-d");
    expect(join("x", "y", "z")).toBe("x-y-z");
  });

  it("should work with mixed argument groupings", () => {
    const combine = curry((a: number, b: number, ...rest: number[]) =>
      [a, b, ...rest].reduce((x, y) => x + y, 0)
    );
    expect(combine(1)(2)(3, 4)).toBe(10);
  });
});
