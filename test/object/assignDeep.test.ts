import { describe, it, expect } from "vitest";
import { assignDeep } from "../../src/object/assignDeep";

describe("assignDeep", () => {
  it("assigns deeply nested properties", () => {
    const target = { a: { b: 1 } };
    const source = { a: { c: 2 } };
    const result = assignDeep(target, source);
    expect(result).toEqual({ a: { b: 1, c: 2 } });
  });

  it("overwrites primitive values", () => {
    const target = { a: 1 };
    const source = { a: 2 };
    expect(assignDeep(target, source)).toEqual({ a: 2 });
  });
});
