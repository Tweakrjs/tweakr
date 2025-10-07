/**
 * Creates a new array with the elements in reverse order.
 *
 * @example
 * ```ts
 * reverse([1, 2, 3]);
 * // → [3, 2, 1]
 *
 * reverse(["a", "b", "c"]);
 * // → ["c", "b", "a"]
 * ```
 *
 * @param array - The array to reverse.
 * @returns A new array with the elements reversed. The original array is not modified.
 *
 * @group Array
 * @since 1.0.0
 */
export function reverse<T>(array: T[]): T[] {
  return [...array].reverse();
}
