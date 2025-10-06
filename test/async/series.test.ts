import { series } from "../../src/async/series";

describe("series", () => {
  it("should execute in sequence", async () => {
    const tasks = [1, 2, 3].map((x) => async () => x * 2);
    const result = await series(tasks);
    expect(result).toEqual([2, 4, 6]);
  });
});
