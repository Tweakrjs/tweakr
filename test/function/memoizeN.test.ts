import { describe, it, expect } from "vitest";
import { memoizeN } from "../../src/function/memoizeN";

describe("memoizeN", () => {
  it("caches results for same arguments", () => {
    let calls = 0;
    const fn = (a: number, b: number) => {
      calls++;
      return a + b;
    };
    const memo = memoizeN(fn);
    expect(memo(1, 2)).toBe(3);
    expect(memo(1, 2)).toBe(3);
    expect(calls).toBe(1);
  });
});
