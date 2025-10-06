import { merge } from "../../src/object/merge";

describe("merge", () => {
  it("should shallow merge objects", () => {
    const a = { a: 1 };
    const b = { b: 2 };
    expect(merge(a, b)).toEqual({ a: 1, b: 2 });
  });
});
