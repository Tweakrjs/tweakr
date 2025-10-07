/**
 * Calculates the sum of an array of numbers.
 *
 * @example
 * ```ts
 * sum([1, 2, 3]); // returns 6
 * sum([-1, 5, 2]); // returns 6
 * ```
 *
 * @param numbers - Array of numbers to sum.
 * @returns The total sum of the numbers.
 *
 * @category Number
 * @since 1.1.0
 */
export function sum(numbers: number[]): number {
  return numbers.reduce((acc, n) => acc + n, 0);
}
