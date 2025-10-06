import { mapAsync } from "../../src/async/mapAsync";

describe("mapAsync", () => {
  it("should map items asynchronously", async () => {
    const arr = [1, 2, 3];
    const result = await mapAsync(arr, async (x) => x * 2);
    expect(result).toEqual([2, 4, 6]);
  });
});
