import { describe, it, expect } from "vitest";
import { factorialBigInt } from "../../src/number/factorialBigInt";

describe("factorialBigInt", () => {
  it("calculates factorial correctly", () => {
    expect(factorialBigInt(0n)).toBe(1n);
    expect(factorialBigInt(5n)).toBe(120n);
    expect(factorialBigInt(10n)).toBe(3628800n);
  });

  it("throws error for negative numbers", () => {
    expect(() => factorialBigInt(-1n)).toThrow();
  });
});
