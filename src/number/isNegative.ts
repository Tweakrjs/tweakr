/**
 * Checks if a number is negative.
 *
 * @example
 * ```ts
 * isNegative(-5); // returns true
 * isNegative(3);  // returns false
 * ```
 *
 * @param n - The number to check.
 * @returns `true` if `n` is negative, otherwise `false`.
 *
 * @group Number
 * @since 1.1.0
 */
export function isNegative(n: number): boolean {
  return n < 0;
}
