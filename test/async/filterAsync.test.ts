import { filterAsync } from "../../src/async/filterAsync";

describe("filterAsync", () => {
  it("should filter based on async condition", async () => {
    const arr = [1, 2, 3, 4];
    const result = await filterAsync(arr, async (x) => x % 2 === 0);
    expect(result).toEqual([2, 4]);
  });
});
