import { describe, it, expect } from "vitest";
import { parallelLimit } from "../../src/async/parallelLimit";

describe("parallelLimit", () => {
  it("runs tasks with concurrency limit and preserves order", async () => {
    const tasks = [1, 2, 3, 4, 5].map((x) => async () => {
      await new Promise((r) => setTimeout(r, 10 * x));
      return x;
    });

    const result = await parallelLimit(tasks, 2);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("propagates errors", async () => {
    const tasks = [
      async () => 1,
      async () => {
        throw new Error("fail");
      },
      async () => 3,
    ];

    await expect(parallelLimit(tasks, 2)).rejects.toThrow("fail");
  });

  it("handles empty tasks array", async () => {
    const result = await parallelLimit([], 3);
    expect(result).toEqual([]);
  });

  it("works if limit > tasks.length", async () => {
    const tasks = [1, 2].map((x) => async () => x);
    const result = await parallelLimit(tasks, 5);
    expect(result).toEqual([1, 2]);
  });

  it("propagates first error among multiple simultaneous errors", async () => {
    const tasks = [
      async () => {
        throw new Error("first");
      },
      async () => {
        throw new Error("second");
      },
    ];
    await expect(parallelLimit(tasks, 2)).rejects.toThrow(/first|second/);
  });
});
