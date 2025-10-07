import { describe, it, expect } from "vitest";
import { has } from "../../src/object/has";

describe("has", () => {
  it("detects existing nested paths", () => {
    const obj = { a: { b: 2 } };
    expect(has(obj, "a.b")).toBe(true);
  });

  it("returns false for non-existing paths", () => {
    const obj = { a: { b: 2 } };
    expect(has(obj, "a.c")).toBe(false);
  });
});
