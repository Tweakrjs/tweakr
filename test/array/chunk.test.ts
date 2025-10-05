import { describe, it, expect } from "vitest";
import { chunk } from "../../src/array/chunk";

describe("chunk", () => {
  it("splits an array into chunks of given size", () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  it("handles size greater than array length", () => {
    expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
  });

  it("returns empty array if input is empty", () => {
    expect(chunk([], 2)).toEqual([]);
  });
});
