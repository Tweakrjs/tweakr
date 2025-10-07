import { describe, it, expect } from "vitest";
import { isEvenBigInt } from "../../src/number/isEvenBigInt";

describe("isEvenBigInt", () => {
  it("returns true for even numbers", () => {
    expect(isEvenBigInt(2n)).toBe(true);
    expect(isEvenBigInt(0n)).toBe(true);
    expect(isEvenBigInt(100n)).toBe(true);
  });

  it("returns false for odd numbers", () => {
    expect(isEvenBigInt(1n)).toBe(false);
    expect(isEvenBigInt(101n)).toBe(false);
  });
});
