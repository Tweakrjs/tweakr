import { describe, it, expect } from "vitest";
import { curryN } from "../../src/function/curryN";

describe("curryN", () => {
  it("curries a 2-argument function", () => {
    const add = (a: number, b: number) => a + b;
    const curried = curryN(2, add);
    expect(curried(1)(2)).toBe(3);
  });

  it("supports partial application and mixed grouping", () => {
    const multiply = (a: number, b: number, c: number) => a * b * c;
    const curried = curryN(3, multiply);
    expect(curried(2)(3)(4)).toBe(24);
    expect(curried(2, 3)(4)).toBe(24);
    expect(curried(2)(3, 4)).toBe(24);
  });

  it("handles rest parameters when arity includes variable args", () => {
    const concat = (...nums: number[]) => nums.join("-");
    const curried = curryN(3, concat);
    expect(curried(1)(2)(3)).toBe("1-2-3");
    expect(curried(1, 2)(3)).toBe("1-2-3");
  });

  it("calls function immediately when enough args are provided", () => {
    const fn = curryN(3, (a: number, b: number, c: number) => a + b + c);
    expect(fn(1, 2, 3)).toBe(6);
  });
});
