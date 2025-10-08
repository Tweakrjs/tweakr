import { describe, it, expect } from "vitest";
import { unset } from "../../src/object/unset";

describe("unset", () => {
  it("removes nested property", () => {
    const obj = { a: { b: 2 } };
    const result = unset(obj, "a.b");
    expect(result).toBe(true);
    expect(obj).toEqual({ a: {} });
  });

  it("returns false if path does not exist", () => {
    const obj = { a: { b: 2 } };
    const result = unset(obj, "a.c");
    expect(result).toBe(false);
  });
});
