import { wrap } from "../../src/function/wrap";

describe("wrap", () => {
  it("should wrap and call inner function", () => {
    const greet = (name: string) => `Hello, ${name}`;
    const exclaim = (fn: (n: string) => string, n: string) => fn(n) + "!";
    const wrapped = wrap(greet, exclaim);
    expect(wrapped("World")).toBe("Hello, World!");
  });
});
