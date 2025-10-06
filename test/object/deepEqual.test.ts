import { deepEqual } from "../../src/object/deepEqual";

describe("deepEqual", () => {
  it("should return true for equal objects", () => {
    expect(deepEqual({ a: 1 }, { a: 1 })).toBe(true);
    expect(deepEqual({ a: { b: 2 } }, { a: { b: 2 } })).toBe(true);
  });

  it("should return false for different objects", () => {
    expect(deepEqual({ a: 1 }, { a: 2 })).toBe(false);
    expect(deepEqual({ a: { b: 2 } }, { a: { b: 3 } })).toBe(false);
  });
});
