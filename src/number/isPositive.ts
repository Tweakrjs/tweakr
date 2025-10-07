/**
 * Checks if a number is positive.
 *
 * @example
 * ```ts
 * isPositive(5);  // returns true
 * isPositive(-3); // returns false
 * isPositive(0);  // returns false
 * ```
 *
 * @param n - The number to check.
 * @returns `true` if `n` is positive, otherwise `false`.
 *
 * @category Number
 * @since 1.1.0
 */
export function isPositive(n: number): boolean {
  return n > 0;
}
