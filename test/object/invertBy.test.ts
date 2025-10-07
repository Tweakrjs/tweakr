import { describe, it, expect } from "vitest";
import { invertBy } from "../../src/object/invertBy";

describe("invertBy", () => {
  it("inverts object values to keys", () => {
    const obj = { a: 1, b: 2, c: 1 };
    const result = invertBy(obj);
    expect(result).toEqual({ "1": ["a", "c"], "2": ["b"] });
  });

  it("handles empty objects", () => {
    expect(invertBy({})).toEqual({});
  });
});
