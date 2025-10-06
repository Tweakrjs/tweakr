import { pipe } from "../../src/function/pipe";

describe("pipe", () => {
  it("should compose functions left to right", () => {
    const add = (x: number) => x + 1;
    const double = (x: number) => x * 2;
    const fn = pipe(add, double);
    expect(fn(2)).toBe(6);
  });
});
