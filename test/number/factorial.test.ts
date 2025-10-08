import { factorial } from "../../src/number/factorial";

describe("factorial", () => {
  it.each([
    [0, 1n],
    [1, 1n],
    [3, 6n],
    [5, 120n],
    [7, 5040n],
  ])("should return factorial(%i) = %i", (input, expected) => {
    expect(factorial(input)).toBe(expected);
  });

  it("should throw for negative numbers", () => {
    expect(() => factorial(-10)).toThrow(
      "Factorial not defined for negative numbers"
    );
  });

  it("should compute large numbers efficiently", () => {
    const result = factorial(15);
    expect(result).toBe(1307674368000n); // memoization check
    // second call should hit cache
    const cached = factorial(15);
    expect(cached).toBe(result);
  });

  it("should support bigint input", () => {
    const result = factorial(10n);
    expect(result).toBe(3628800n);
  });

  it("should handle very large factorials", () => {
    const result = factorial(25);
    expect(typeof result).toBe("bigint");
    expect(result.toString().startsWith("1551121")).toBe(true);
  });
});
