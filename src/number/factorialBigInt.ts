/**
 * Computes the factorial of a non-negative BigInt.
 *
 * @example
 * ```ts
 * factorialBigInt(5n); // returns 120n
 * factorialBigInt(0n); // returns 1n
 * ```
 *
 * @param n - Non-negative BigInt
 * @returns Factorial as BigInt
 *
 * @group Number
 * @since 1.2.0
 */
export function factorialBigInt(n: bigint): bigint {
  if (n < 0n) throw new Error("Negative numbers are not allowed.");
  let result = 1n;
  for (let i = 2n; i <= n; i++) result *= i;
  return result;
}
