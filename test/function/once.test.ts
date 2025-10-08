import { describe, it, expect } from "vitest";
import { once } from "../../src/function/once";

describe("once", () => {
  it("should run only once", () => {
    let count = 0;
    const fn = once(() => ++count);
    fn();
    fn();
    expect(count).toBe(1);
  });

  it("should return the same result for subsequent calls", () => {
    const fn = once((x: number) => x * 2);
    expect(fn(2)).toBe(4);
    expect(fn(5)).toBe(4);
  });

  it("should preserve 'this' context", () => {
    const obj = {
      val: 10,
      fn: once(function (this: any) {
        return this.val;
      }),
    };
    expect(obj.fn()).toBe(10);
  });
});
