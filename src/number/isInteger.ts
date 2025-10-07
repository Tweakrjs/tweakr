/**
 * Checks if a given number is an integer.
 *
 * @example
 * ```ts
 * isInteger(10); // returns true
 * isInteger(10.5); // returns false
 * ```
 *
 * @param n - The number to check.
 * @returns `true` if `n` is an integer, otherwise `false`.
 *
 * @group Number
 * @since 1.1.0
 */
export function isInteger(n: number): boolean {
  return Number.isInteger(n);
}
