import { describe, it, expect } from "vitest";
import { memoizeAsync } from "../../src/async/memoizeAsync";

describe("memoizeAsync", () => {
  it("caches deep objects correctly", async () => {
    const fn = async (obj: any) => Math.random();
    const memo = memoizeAsync(fn);

    const a = { x: { y: 1 } };
    const b = { x: { y: 1 } };

    const result1 = await memo(a);
    const result2 = await memo(b);

    expect(result1).toBe(result2);
  });

  it("handles nested arrays correctly", async () => {
    const fn = async (arr: any[]) => arr.length;
    const memo = memoizeAsync(fn);

    const arr1 = [
      [1, 2],
      [3, 4],
    ];
    const arr2 = [
      [1, 2],
      [3, 4],
    ];

    expect(await memo(arr1)).toBe(await memo(arr2));
  });

  it("supports custom resolver for cache keys", async () => {
    const fn = async (obj: { id: number }) => Math.random();
    const resolver = (obj: { id: number }) => String(obj.id);
    const memo = memoizeAsync(fn, resolver);

    const result1 = await memo({ id: 1 });
    const result2 = await memo({ id: 1 });

    expect(result1).toBe(result2);
  });

  it("deduplicates concurrent async calls with the same arguments", async () => {
    let callCount = 0;
    const fn = async (id: number) => {
      callCount++;
      await new Promise((resolve) => setTimeout(resolve, 30));
      return id * 2;
    };

    const memo = memoizeAsync(fn);
    const [r1, r2] = await Promise.all([memo(1), memo(1)]);

    expect(r1).toBe(2);
    expect(r2).toBe(2);
    expect(callCount).toBe(1);
  });
});
