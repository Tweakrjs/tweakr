import { describe, it, expect } from "vitest";
import { clampBigInt } from "../../src/number/clampBigInt";

describe("clampBigInt", () => {
  it("clamps the value correctly", () => {
    expect(clampBigInt(5n, 1n, 10n)).toBe(5n);
    expect(clampBigInt(0n, 1n, 10n)).toBe(1n);
    expect(clampBigInt(15n, 1n, 10n)).toBe(10n);
  });
});
