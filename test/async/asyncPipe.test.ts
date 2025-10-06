import { asyncPipe } from "../../src/async/asyncPipe";

describe("asyncPipe", () => {
  it("should compose async functions left to right", async () => {
    const add = async (x: number) => x + 1;
    const double = async (x: number) => x * 2;
    const fn = asyncPipe(add, double);
    const result = await fn(2);
    expect(result).toBe(6); // add(2)=3 -> double(3)=6
  });

  it("should handle mixed sync and async functions", async () => {
    const add = (x: number) => x + 1;
    const double = async (x: number) => x * 2;
    const fn = asyncPipe(add, double);
    const result = await fn(2);
    expect(result).toBe(6);
  });

  it("should propagate errors from any function", async () => {
    const fail = async (x: number) => {
      throw new Error("fail");
    };
    const add = async (x: number) => x + 1;
    const fn = asyncPipe(add, fail);
    await expect(fn(2)).rejects.toThrow("fail");
  });

  it("should return input if no functions are provided", async () => {
    const fn = asyncPipe();
    const result = await fn(42);
    expect(result).toBe(42);
  });
});
