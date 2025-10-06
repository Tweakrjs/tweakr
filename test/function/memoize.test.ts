import { memoize } from "../../src/function/memoize";

describe("memoize", () => {
  it("should cache function results", () => {
    let count = 0;
    const fn = memoize((x: number) => ++count && x * 2);
    fn(2);
    fn(2);
    expect(count).toBe(1);
  });
});
