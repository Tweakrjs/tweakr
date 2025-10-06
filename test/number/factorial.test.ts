import { factorial } from "../../src/number/factorial";

describe("factorial", () => {
  it("should calculate factorial", () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(5)).toBe(120);
  });

  it("should throw for negative numbers", () => {
    expect(() => factorial(-1)).toThrow();
  });
});
