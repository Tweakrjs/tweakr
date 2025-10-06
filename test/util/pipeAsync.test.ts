import { pipeAsync } from "../../src/util/pipeAsync";

describe("pipeAsync", () => {
  it("should compose async functions sequentially", async () => {
    const add1 = async (x: number) => x + 1;
    const mul2 = async (x: number) => x * 2;
    const fn = pipeAsync(add1, mul2);
    const result = await fn(2); // (2 + 1) * 2 = 6
    expect(result).toBe(6);
  });
});
