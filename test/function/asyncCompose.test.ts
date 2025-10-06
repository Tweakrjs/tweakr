import { asyncCompose } from "../../src/function/asyncCompose";

describe("asyncCompose", () => {
  it("should compose async functions right to left", async () => {
    const add = async (x: number) => x + 1;
    const double = async (x: number) => x * 2;
    const fn = asyncCompose(double, add);
    const result = await fn(2);
    expect(result).toBe(6);
  });
});
