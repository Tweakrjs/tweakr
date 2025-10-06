import { memoizeAsync } from "../../src/async/memoizeAsync";

describe("memoizeAsync", () => {
  it("should cache async results", async () => {
    const fn = vi.fn(async (x: number) => x * 2);
    const memo = memoizeAsync(fn);
    await memo(2);
    await memo(2);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
