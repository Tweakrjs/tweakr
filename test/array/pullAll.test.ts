import { describe, it, expect } from "vitest";
import { pullAll } from "../../src/array/pullAll";

describe("pullAll", () => {
  it("removes all values from array", () => {
    expect(pullAll([1, 2, 3, 4], [2, 4])).toEqual([1, 3]);
  });
});
