import { fibonacci } from "../../src/number/fibonacci";

describe("fibonacci", () => {
  it.each([
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 2],
    [7, 13],
    [10, 55],
  ])("should return fibonacci(%i) = %i", (input, expected) => {
    expect(fibonacci(input)).toBe(expected);
  });

  it("should throw for negative numbers", () => {
    expect(() => fibonacci(-5)).toThrow(
      "Fibonacci not defined for negative numbers"
    );
  });

  it("should compute large numbers efficiently", () => {
    expect(fibonacci(30)).toBe(832040); // ensures memoization works
  });
});
