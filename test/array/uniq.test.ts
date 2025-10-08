import { describe, it, expect } from "vitest";
import { uniq } from "../../src/array/uniq";

describe("uniq (improved)", () => {
  it("removes duplicate numbers", () => {
    expect(uniq([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
  });

  it("removes duplicate strings", () => {
    expect(uniq(["a", "b", "a", "c", "b"])).toEqual(["a", "b", "c"]);
  });

  it("handles boolean values", () => {
    expect(uniq([true, false, true, false])).toEqual([true, false]);
  });

  it("handles null and undefined separately", () => {
    expect(uniq([null, undefined, null, undefined])).toEqual([null, undefined]);
  });

  it("handles objects by reference", () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    expect(uniq([obj1, obj1, obj2])).toEqual([obj1, obj2]);
  });

  it("handles mixed value types", () => {
    const obj = { x: 1 };
    expect(uniq([1, "1", 1, obj, { x: 1 }, obj])).toEqual([
      1,
      "1",
      obj,
      { x: 1 },
    ]);
  });

  it("preserves original array order", () => {
    expect(uniq([3, 1, 2, 1, 3, 2, 4])).toEqual([3, 1, 2, 4]);
  });

  it("returns empty array when input is empty", () => {
    expect(uniq([])).toEqual([]);
  });
});
