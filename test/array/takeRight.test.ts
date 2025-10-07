import { describe, it, expect } from "vitest";
import { takeRight } from "../../src/array/takeRight";

describe("takeRight", () => {
  it("returns last n elements", () => {
    expect(takeRight([1, 2, 3], 2)).toEqual([2, 3]);
  });
});
