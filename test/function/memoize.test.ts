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

  it("handles nested arrays", () => {
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
});
