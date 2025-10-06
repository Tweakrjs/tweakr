import { asyncPipe } from "../../src/function/asyncPipe";

describe("asyncPipe", () => {
  it("should compose async functions left to right", async () => {
    const add = async (x: number) => x + 1;
    const double = async (x: number) => x * 2;
    const fn = asyncPipe(add, double);
    const result = await fn(2);
    expect(result).toBe(6);
  });
});
