import { parallelLimit } from "../../src/async/parallelLimit";

describe("parallelLimit", () => {
  it("should run tasks with concurrency limit and preserve order", async () => {
    const tasks = [1, 2, 3, 4, 5].map((x) => async () => {
      await new Promise((r) => setTimeout(r, 10 * x));
      return x;
    });

    const result = await parallelLimit(tasks, 2);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("should propagate errors", async () => {
    const tasks = [
      async () => 1,
      async () => {
        throw new Error("fail");
      },
      async () => 3,
    ];

    await expect(parallelLimit(tasks, 2)).rejects.toThrow("fail");
  });

  it("should handle empty tasks array", async () => {
    const result = await parallelLimit([], 3);
    expect(result).toEqual([]);
  });
});
