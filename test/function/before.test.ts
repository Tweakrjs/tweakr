import { before } from "../../src/function/before";

describe("before", () => {
  it("should only run before N calls", () => {
    let called = 0;
    const fn = before(3, () => called++);
    fn();
    fn();
    fn();
    fn();
    expect(called).toBe(2);
  });
});
