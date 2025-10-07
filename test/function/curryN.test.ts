import { describe, it, expect } from "vitest";
import { curryN } from "../../src/function/curryN";

describe("curryN", () => {
  it("curries a 2-argument function", () => {
    const add = (a: number, b: number) => a + b;
    const curried = curryN(2, add);
    expect(curried(1)(2)).toBe(3);
  });

  it("supports partial application", () => {
    const multiply = (a: number, b: number, c: number) => a * b * c;
    const curried = curryN(3, multiply);
    expect(curried(2)(3)(4)).toBe(24);
    expect(curried(2, 3)(4)).toBe(24);
  });
});
