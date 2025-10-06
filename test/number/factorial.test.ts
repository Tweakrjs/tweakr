import { factorial } from "../../src/number/factorial";

describe("factorial", () => {
  it.each([
    [0, 1],
    [1, 1],
    [3, 6],
    [5, 120],
    [7, 5040],
  ])("should return factorial(%i) = %i", (input, expected) => {
    expect(factorial(input)).toBe(expected);
  });

  it("should throw for negative numbers", () => {
    expect(() => factorial(-10)).toThrow(
      "Factorial not defined for negative numbers"
    );
  });

  it("should compute large numbers efficiently", () => {
    expect(factorial(15)).toBe(1307674368000); // memoization check
  });
});
