import { waterfall } from "../../src/async/waterfall";

describe("waterfall", () => {
  it("should pass result between tasks", async () => {
    const tasks = [
      async (x: number) => x + 1,
      async (x: number) => x * 2,
      async (x: number) => x - 3,
    ];
    const result = await waterfall(tasks, 1);
    expect(result).toBe(1); // ((1+1)*2)-3 = 1
  });
});
