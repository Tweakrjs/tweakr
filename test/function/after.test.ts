import { describe, it, expect } from "vitest";
import { after } from "../../src/function/after";

describe("after", () => {
  it("should only run after N calls", () => {
    let called = 0;
    const fn = after(3, () => ++called);
    fn(); // 1
    fn(); // 2
    fn(); // triggers
    fn(); // ignored (already executed once)
    expect(called).toBe(1);
  });

  it("should pass arguments correctly", () => {
    const fn = after(2, (x: number, y: number) => x + y);
    fn(1, 2);
    expect(fn(3, 4)).toBe(7);
  });

  it("should not call fn if n <= 0", () => {
    let called = 0;
    const fn = after(0, () => ++called);
    fn();
    expect(called).toBe(1); // runs immediately when n <= 0
  });
});
