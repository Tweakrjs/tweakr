import { fibonacci } from "../../src/number/fibonacci";

describe("fibonacci", () => {
  it("should return nth Fibonacci number", () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(7)).toBe(13);
  });

  it("should throw for negative numbers", () => {
    expect(() => fibonacci(-1)).toThrow();
  });
});
