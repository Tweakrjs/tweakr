import { deepEqual } from "../../src/object/deepEqual";

describe("deepEqual", () => {
  it("should return true for identical primitives", () => {
    expect(deepEqual(5, 5)).toBe(true);
    expect(deepEqual("test", "test")).toBe(true);
  });

  it("should deeply compare nested objects", () => {
    const a = { x: 1, y: { z: 2 } };
    const b = { x: 1, y: { z: 2 } };
    expect(deepEqual(a, b)).toBe(true);
  });

  it("should deeply compare arrays", () => {
    const a = [1, [2, 3]];
    const b = [1, [2, 3]];
    expect(deepEqual(a, b)).toBe(true);
  });

  it("should handle Date, RegExp, Map, and Set", () => {
    expect(deepEqual(new Date(0), new Date(0))).toBe(true);
    expect(deepEqual(/a/i, /a/i)).toBe(true);

    const mapA = new Map([["k", 1]]);
    const mapB = new Map([["k", 1]]);
    expect(deepEqual(mapA, mapB)).toBe(true);

    const setA = new Set([1, 2]);
    const setB = new Set([1, 2]);
    expect(deepEqual(setA, setB)).toBe(true);
  });

  it("should handle circular references", () => {
    const a: any = { x: 1 };
    a.self = a;
    const b: any = { x: 1 };
    b.self = b;
    expect(deepEqual(a, b)).toBe(true);
  });

  it("should return false for different objects", () => {
    expect(deepEqual({ a: 1 }, { a: 2 })).toBe(false);
    expect(deepEqual([1, 2], [1, 3])).toBe(false);
  });
});
