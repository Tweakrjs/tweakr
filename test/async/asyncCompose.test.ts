import { asyncCompose } from "../../src/async/asyncCompose";

describe("asyncCompose", () => {
  it("should compose async functions right to left", async () => {
    const add = async (x: number) => x + 1;
    const double = async (x: number) => x * 2;
    const fn = asyncCompose(double, add);
    const result = await fn(2);
    expect(result).toBe(6); // add(2)=3 -> double(3)=6
  });

  it("should handle mixed sync and async functions", async () => {
    const addSync = (x: number) => x + 1;
    const double = async (x: number) => x * 2;
    const fn = asyncCompose(double, addSync);
    const result = await fn(2);
    expect(result).toBe(6);
  });

  it("should propagate errors from any function", async () => {
    const fail = async (x: number) => {
      throw new Error("fail");
    };
    const add = async (x: number) => x + 1;
    const fn = asyncCompose(fail, add);
    await expect(fn(2)).rejects.toThrow("fail");
  });

  it("should return input if no functions are provided", async () => {
    const fn = asyncCompose();
    const result = await fn(42);
    expect(result).toBe(42);
  });
});
