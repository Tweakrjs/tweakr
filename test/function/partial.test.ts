import { describe, it, expect } from "vitest";
import { partial } from "../../src/function/partial";

describe("partial", () => {
  it("should apply initial arguments", () => {
    const add = (a: number, b: number, c: number) => a + b + c;
    const fn = partial(add, 1, 2);
    expect(fn(3)).toBe(6);
  });

  it("should handle full pre-application", () => {
    const add = (a: number, b: number) => a + b;
    const fn = partial(add, 1, 2);
    expect(fn()).toBe(3);
  });

  it("should preserve rest parameters", () => {
    const greet = (greeting: string, name: string, ...titles: string[]) =>
      `${greeting}, ${name}${
        titles.length ? " (" + titles.join(", ") + ")" : ""
      }!`;
    const sayHello = partial(greet, "Hello");
    expect(sayHello("Alice")).toBe("Hello, Alice!");
    expect(sayHello("Alice", "PhD", "Professor")).toBe(
      "Hello, Alice (PhD, Professor)!"
    );
  });

  it("should support multiple chained partials", () => {
    const fn = (a: number, b: number, c: number, d: number) => a + b + c + d;
    const step1 = partial(fn, 1);
    const step2 = partial(step1, 2);
    const step3 = partial(step2, 3);
    expect(step3(4)).toBe(10);
  });
});
