import { describe, it, expect } from "vitest";
import { asyncCompose } from "../../src/async/asyncCompose";

describe("asyncCompose", () => {
  it("executes functions right-to-left with async functions", async () => {
    const addOne = async (x: number) => x + 1;
    const double = async (x: number) => x * 2;

    const fn = asyncCompose(double, addOne);
    const result = await fn(3); // addOne(3)=4 → double(4)=8

    expect(result).toBe(8);
  });

  it("handles mixed synchronous and asynchronous functions", async () => {
    const addOne = (x: number) => x + 1;
    const double = async (x: number) => x * 2;

    const fn = asyncCompose(double, addOne);
    const result = await fn(4); // addOne(4)=5 → double(5)=10

    expect(result).toBe(10);
  });

  it("propagates errors from any function immediately", async () => {
    const fail = async (x: number) => {
      throw new Error("fail");
    };
    const addOne = async (x: number) => x + 1;

    const fn = asyncCompose(fail, addOne);

    await expect(fn(1)).rejects.toThrow("fail");
  });

  it("returns input if no functions are provided", async () => {
    const fn = asyncCompose();
    const result = await fn(42);

    expect(result).toBe(42);
  });
});
