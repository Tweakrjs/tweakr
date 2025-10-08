import { describe, it, expect } from "vitest";
import { wrapDeep } from "../../src/function/wrapDeep";

describe("wrapDeep", () => {
  it("wraps function with wrapper", () => {
    const fn = (x: number) => x + 1;
    const wrapped = wrapDeep(fn, (f) => (x: number) => f(x) * 2);
    expect(wrapped(2)).toBe(6); // (2+1)*2
  });
});
