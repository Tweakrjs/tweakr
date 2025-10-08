import { describe, it, expect } from "vitest";
import { before } from "../../src/function/before";

describe("before", () => {
  it("should only run before N calls", () => {
    let called = 0;
    const fn = before(3, () => ++called);
    fn();
    fn();
    fn();
    fn();
    expect(called).toBe(2);
  });

  it("should pass arguments correctly", () => {
    const fn = before(3, (x: number, y: number) => x + y);
    expect(fn(1, 2)).toBe(3);
    expect(fn(3, 4)).toBe(7);
    expect(fn(5, 6)).toBeUndefined();
  });

  it("should return undefined if n <= 1", () => {
    const fn = before(1, () => "test");
    expect(fn()).toBeUndefined();
  });
});
