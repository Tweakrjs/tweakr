/**
 * Computes the factorial of a non-negative integer using memoization.
 *
 * @example
 * ```ts
 * factorial(0); // returns 1
 * factorial(5); // returns 120
 * ```
 *
 * @param n - Non-negative integer to calculate the factorial of.
 * @returns The factorial of `n`.
 * @throws Will throw an error if `n` is negative.
 *
 * @group Number
 * @since 1.1.0
 */
const memoCache: Record<string, number> = {};

export function factorial(n: number): number {
  if (n < 0) throw new Error("Factorial not defined for negative numbers");
  if (n === 0) return 1;

  if (memoCache[`fact_${n}`] !== undefined) return memoCache[`fact_${n}`];

  const result = n * factorial(n - 1);
  memoCache[`fact_${n}`] = result;
  return result;
}
