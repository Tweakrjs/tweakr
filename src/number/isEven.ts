/**
 * Checks if a given number is even.
 *
 * @example
 * ```ts
 * isEven(2); // returns true
 * isEven(3); // returns false
 * ```
 *
 * @param n - The number to check.
 * @returns `true` if the number is even, otherwise `false`.
 *
 * @group Number
 * @since 1.1.0
 */
export function isEven(n: number): boolean {
  return n % 2 === 0;
}
