/**
 * Returns the maximum value from an array of numbers.
 *
 * @example
 * ```ts
 * max([1, 5, 3]); // returns 5
 * max([-2, -5, -1]); // returns -1
 * ```
 *
 * @param numbers - Array of numbers to evaluate.
 * @returns The largest number in the array.
 *
 * @category Number
 * @since 1.1.0
 */
export function max(numbers: number[]): number {
  return Math.max(...numbers);
}
