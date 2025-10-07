/**
 * Checks if a number is odd.
 *
 * @example
 * ```ts
 * isOdd(3);  // returns true
 * isOdd(4);  // returns false
 * ```
 *
 * @param n - The number to check.
 * @returns `true` if `n` is odd, otherwise `false`.
 *
 * @category Number
 * @since 1.1.0
 */
export function isOdd(n: number): boolean {
  return n % 2 !== 0;
}
