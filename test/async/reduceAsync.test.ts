import { reduceAsync } from "../../src/async/reduceAsync";

describe("reduceAsync", () => {
  it("should reduce asynchronously", async () => {
    const arr = [1, 2, 3];
    const result = await reduceAsync(arr, async (acc, x) => acc + x, 0);
    expect(result).toBe(6);
  });
});
