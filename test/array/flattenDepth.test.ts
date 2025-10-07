import { describe, it, expect } from "vitest";
import { flattenDepth } from "../../src/array/flattenDepth";

describe("flattenDepth", () => {
  it("flattens array to given depth", () => {
    expect(flattenDepth([1, [2, [3]]], 1)).toEqual([1, 2, [3]]);
  });
});
