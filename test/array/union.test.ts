import { describe, it, expect } from "vitest";
import { union } from "../../src/array/union";

describe("union", () => {
  it("combines multiple arrays into unique values", () => {
    expect(union([1, 2], [2, 3])).toEqual([1, 2, 3]);
  });

  it("returns empty array if no arrays provided", () => {
    expect(union()).toEqual([]);
  });
});
