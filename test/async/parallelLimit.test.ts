import { parallelLimit } from "../../src/async/parallelLimit";

describe("parallelLimit", () => {
  it("should run tasks with concurrency limit", async () => {
    const tasks = [1, 2, 3, 4, 5].map((x) => async () => x);
    const result = await parallelLimit(tasks, 2);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
