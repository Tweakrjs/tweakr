import { describe, it, expect } from "vitest";
import { memoize } from "../../src/function/memoize";

describe("memoize (sync)", () => {
  it("caches deep objects correctly", () => {
    const fn = (obj: any) => Math.random();
    const memo = memoize(fn);

    const a = { x: { y: 1 } };
    const b = { x: { y: 1 } };

    const result1 = memo(a);
    const result2 = memo(b);

    expect(result1).toBe(result2);
  });

  it("handles nested arrays correctly", () => {
    const fn = (arr: any[]) => arr.length;
    const memo = memoize(fn);

    const arr1 = [
      [1, 2],
      [3, 4],
    ];
    const arr2 = [
      [1, 2],
      [3, 4],
    ];

    expect(memo(arr1)).toBe(memo(arr2));
  });

  it("supports custom resolver for cache keys", () => {
    const fn = (obj: { id: number }) => Math.random();
    const resolver = (obj: { id: number }) => String(obj.id);
    const memo = memoize(fn, resolver);

    const result1 = memo({ id: 1 });
    const result2 = memo({ id: 1 });

    expect(result1).toBe(result2);
  });

  it("returns new result for different inputs", () => {
    const fn = (x: number) => Math.random();
    const memo = memoize(fn);

    const a = memo(1);
    const b = memo(2);

    expect(a).not.toBe(b);
  });
});
