import { describe, it, expect } from "vitest";
import { getOrDefault } from "../../src/object/getOrDefault";

describe("getOrDefault", () => {
  it("returns nested value if exists", () => {
    const obj = { a: { b: 2 } };
    expect(getOrDefault(obj, "a.b", 0)).toBe(2);
  });

  it("returns default if path does not exist", () => {
    const obj = { a: { b: 2 } };
    expect(getOrDefault(obj, "a.c", 0)).toBe(0);
  });
});
