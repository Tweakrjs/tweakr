import { pipeAsync } from "../../src/util/pipeAsync";

describe("pipeAsync", () => {
  it("should compose async functions sequentially", async () => {
    const add1 = async (x: number) => x + 1;
    const mul2 = async (x: number) => x * 2;
    const fn = pipeAsync(add1, mul2);
    const result = await fn(2); // (2 + 1) * 2 = 6
    expect(result).toBe(6);
  });

  it("should handle multiple async functions", async () => {
    const add1 = async (x: number) => x + 1;
    const mul2 = async (x: number) => x * 2;
    const sub3 = async (x: number) => x - 3;
    const fn = pipeAsync(add1, mul2, sub3);
    const result = await fn(3); // ((3+1)*2) - 3 = 5
    expect(result).toBe(5);
  });

  it("should handle synchronous functions too", async () => {
    const add1 = (x: number) => x + 1;
    const mul2 = (x: number) => x * 2;
    const fn = pipeAsync(add1, mul2);
    const result = await fn(2); // (2+1)*2 = 6
    expect(result).toBe(6);
  });

  it("should return input if no functions provided", async () => {
    const fn = pipeAsync<number>();
    const result = await fn(42);
    expect(result).toBe(42);
  });
});
