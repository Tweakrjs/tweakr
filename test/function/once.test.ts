import { once } from "../../src/function/once";

describe("once", () => {
  it("should run only once", () => {
    let count = 0;
    const fn = once(() => count++);
    fn();
    fn();
    expect(count).toBe(1);
  });
});
