import { deepMerge } from "../../src/object/deepMerge";

describe("deepMerge", () => {
  it("should deeply merge objects", () => {
    const a = { a: 1, b: { c: 2 } };
    const b = { b: { d: 3 }, e: 4 };
    const merged = deepMerge(a, b);
    expect(merged).toEqual({ a: 1, b: { c: 2, d: 3 }, e: 4 });
  });
});
