import { describe, it, expect } from "vitest";
import { composeN } from "../../src/function/composeN";

describe("composeN", () => {
  it("composes functions right-to-left", () => {
    const double = (x: number) => x * 2;
    const addOne = (x: number) => x + 1;
    const composed = composeN(addOne, double);
    expect(composed(3)).toBe(7); // addOne(double(3))
  });
});
