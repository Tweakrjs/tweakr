import { after } from "../../src/function/after";

describe("after", () => {
  it("should only run after N calls", () => {
    let called = 0;
    const fn = after(3, () => called++);
    fn();
    fn();
    fn();
    fn();
    expect(called).toBe(1);
  });
});
