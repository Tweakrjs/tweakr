import { deepMerge } from "../../src/object/deepMerge";

describe("deepMerge", () => {
  it("should deeply merge nested objects", () => {
    const a = { a: 1, b: { c: 2 } };
    const b = { b: { d: 3 }, e: 4 };
    const merged = deepMerge(a, b);
    expect(merged).toEqual({ a: 1, b: { c: 2, d: 3 }, e: 4 });
  });

  it("should overwrite primitive values", () => {
    const a = { a: 1, b: 2 };
    const b = { b: 3, c: 4 };
    const merged = deepMerge(a, b);
    expect(merged).toEqual({ a: 1, b: 3, c: 4 });
  });

  it("should merge arrays by replacing, not concatenating", () => {
    const a = { arr: [1, 2] };
    const b = { arr: [3, 4] };
    const merged = deepMerge(a, b);
    expect(merged.arr).toEqual([3, 4]);
  });

  it("should handle multiple nested merges", () => {
    const a = { a: { b: { c: 1 } } };
    const b = { a: { b: { d: 2 }, e: 3 }, f: 4 };
    const merged = deepMerge(a, b);
    expect(merged).toEqual({ a: { b: { c: 1, d: 2 }, e: 3 }, f: 4 });
  });

  it("should not modify original objects", () => {
    const a = { a: 1, b: { c: 2 } };
    const b = { b: { d: 3 }, e: 4 };
    const merged = deepMerge(a, b);

    expect(merged).toBeDefined(); // <- reference merged
    expect(a).toEqual({ a: 1, b: { c: 2 } });
    expect(b).toEqual({ b: { d: 3 }, e: 4 });
  });
});
