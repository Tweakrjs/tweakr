/**
 * Creates a new array excluding all given values.
 *
 * @example
 * ```ts
 * pull([1, 2, 3, 4], 2, 4);
 * // → [1, 3]
 *
 * pull(["a", "b", "c"], "b");
 * // → ["a", "c"]
 * ```
 *
 * @param array - The source array to filter.
 * @param values - The values to exclude from the new array.
 * @returns A new array excluding the specified values.
 *
 * @category Array
 * @since 1.0.0
 */
export function pull<T>(array: T[], ...values: T[]): T[] {
  return array.filter((item) => !values.includes(item));
}
