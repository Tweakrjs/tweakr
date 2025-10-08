import { describe, it, expect } from "vitest";
import { flatten } from "../../src/array/flatten";

describe("flatten", () => {
  it("flattens one level deep by default", () => {
    const arr = [1, [2, 3], [4, 5]];
    expect(flatten(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it("leaves non-array elements unchanged", () => {
    const arr = [[1], 2, [3, [4]]];
    expect(flatten(arr)).toEqual([1, 2, 3, [4]]);
  });

  it("deeply flattens nested arrays when deep=true", () => {
    const arr = [1, [2, [3, [4]]], 5];
    expect(flatten(arr, true)).toEqual([1, 2, 3, 4, 5]);
  });

  it("handles empty arrays", () => {
    expect(flatten([])).toEqual([]);
    expect(flatten([[]])).toEqual([]);
  });

  it("works with mixed types", () => {
    const arr = [1, ["a", [true, null]], 3];
    expect(flatten(arr, true)).toEqual([1, "a", true, null, 3]);
  });

  it("preserves order", () => {
    const arr = [[1, 2], [3, [4, 5]], 6];
    expect(flatten(arr, true)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
