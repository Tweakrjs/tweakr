import { describe, it, expect } from "vitest";
import { flattenDeep } from "../../src/array/flattenDeep";

describe("flattenDeep", () => {
  it("fully flattens nested arrays by default (depth=Infinity)", () => {
    const arr = [1, [2, [3, [4]]], 5];
    expect(flattenDeep(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it("flattens up to specified depth", () => {
    const arr = [1, [2, [3, [4]]]];
    expect(flattenDeep(arr, 0)).toEqual([1, [2, [3, [4]]]]);
    expect(flattenDeep(arr, 1)).toEqual([1, 2, [3, [4]]]);
    expect(flattenDeep(arr, 2)).toEqual([1, 2, 3, [4]]);
  });

  it("handles empty arrays", () => {
    expect(flattenDeep([])).toEqual([]);
    expect(flattenDeep([[]])).toEqual([]);
  });

  it("works with mixed types", () => {
    const arr = [1, ["a", [true, null]], 3];
    expect(flattenDeep(arr)).toEqual([1, "a", true, null, 3]);
  });

  it("preserves original order", () => {
    const arr = [[1, 2], [3, [4, 5]], 6];
    expect(flattenDeep(arr)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
