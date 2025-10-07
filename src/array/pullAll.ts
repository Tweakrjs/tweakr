/**
 * Creates a new array excluding all values present in the given array of values.
 *
 * @example
 * ```ts
 * pullAll([1, 2, 3, 4], [2, 4]);
 * // → [1, 3]
 *
 * pullAll(["a", "b", "c"], ["a"]);
 * // → ["b", "c"]
 * ```
 *
 * @param array - The source array to filter.
 * @param values - The array of values to exclude from the new array.
 * @returns A new array excluding all specified values.
 *
 * @group Array
 * @since 1.0.0
 */
export function pullAll<T>(array: T[], values: T[]): T[] {
  return array.filter((item) => !values.includes(item));
}
