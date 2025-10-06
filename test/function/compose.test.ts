import { compose } from "../../src/function/compose";

describe("compose", () => {
  it("should compose functions right to left", () => {
    const add = (x: number) => x + 2;
    const double = (x: number) => x * 2;
    const fn = compose(double, add);
    expect(fn(2)).toBe(8);
  });
});
