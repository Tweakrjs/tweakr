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

  it("handles nested arrays", async () => {
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
});
