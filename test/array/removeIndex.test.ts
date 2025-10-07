import { describe, it, expect } from "vitest";
import { removeIndex } from "../../src/array/removeIndex";

describe("removeIndex", () => {
  it("removes elements by index", () => {
    expect(removeIndex([1, 2, 3, 4], 1)).toEqual([1, 3, 4]);
    expect(removeIndex([1, 2, 3, 4], [0, 3])).toEqual([2, 3]);
  });
});
