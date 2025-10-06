import { partial } from "../../src/function/partial";

describe("partial", () => {
  it("should apply initial arguments", () => {
    const add = (a: number, b: number, c: number) => a + b + c;
    const fn = partial(add, 1, 2);
    expect(fn(3)).toBe(6);
  });
});
