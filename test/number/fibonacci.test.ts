import { fibonacci } from "../../src/number/fibonacci";

describe("fibonacci", () => {
  it.each([
    [0, 0n],
    [1, 1n],
    [2, 1n],
    [3, 2n],
    [7, 13n],
    [10, 55n],
  ])("should return fibonacci(%i) = %i", (input, expected) => {
    expect(fibonacci(input)).toBe(expected);
  });

  it("should throw for negative numbers", () => {
    expect(() => fibonacci(-5)).toThrow(
      "Fibonacci not defined for negative numbers"
    );
  });

  it("should compute large numbers efficiently", () => {
    const result = fibonacci(30);
    expect(result).toBe(832040n);
    // Ensure memoization hit
    const cached = fibonacci(30);
    expect(cached).toBe(result);
  });

  it("should support bigint input", () => {
    expect(fibonacci(10n)).toBe(55n);
  });

  it("should handle very large fibonacci numbers", () => {
    const result = fibonacci(100);
    expect(typeof result).toBe("bigint");
    expect(result.toString().startsWith("3542248")).toBe(true);
  });
});
