/**
 * Returns the minimum value from an array of numbers.
 *
 * @example
 * ```ts
 * min([1, 5, 3]); // returns 1
 * min([-2, -5, -1]); // returns -5
 * ```
 *
 * @param numbers - Array of numbers to evaluate.
 * @returns The smallest number in the array.
 *
 * @category Number
 * @since 1.1.0
 */
export function min(numbers: number[]): number {
  return Math.min(...numbers);
}
