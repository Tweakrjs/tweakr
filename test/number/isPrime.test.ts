import { isPrime } from "../../src/number/isPrime";

describe("isPrime", () => {
  it("should detect prime numbers", () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(13)).toBe(true);
    expect(isPrime(1)).toBe(false);
  });
});
