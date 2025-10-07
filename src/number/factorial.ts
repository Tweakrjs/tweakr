const memoCache: Record<string, number> = {};
/**
 * Computes the factorial of a non-negative integer using memoization.
 *
 * Memoization stores previously calculated factorials in an internal cache
 * to improve performance for repeated calls.
 *
 * @example
 * ```ts
 * factorial(0); // 1
 * factorial(5); // 120
 * ```
 *
 * @param n - The non-negative integer to calculate the factorial of.
 * @returns The factorial of `n`.
 * @throws {Error} If `n` is negative.
 *
 * @group Number
 * @since 1.1.0
 */
export function factorial(n: number): number {
  if (n < 0) throw new Error("Factorial not defined for negative numbers");
  if (n === 0) return 1;

  if (memoCache[`fact_${n}`] !== undefined) return memoCache[`fact_${n}`];

  const result = n * factorial(n - 1);
  memoCache[`fact_${n}`] = result;
  return result;
}
