/**
 * Fills elements of an array with a specified value from the start index up to, but not including, the end index.
 *
 * @example
 * ```ts
 * fill([1, 2, 3, 4], 0, 1, 3);
 * // → [1, 0, 0, 4]
 *
 * fill([1, 2, 3], 5);
 * // → [5, 5, 5]
 * ```
 *
 * @param array - The array to fill.
 * @param value - The value to fill the array with.
 * @param start - The start position (inclusive). Defaults to `0`.
 * @param end - The end position (exclusive). Defaults to the array length.
 * @returns A new array with the specified range filled with the given value.
 *
 * @category Array
 * @since 1.0.0
 */
export function fill<T>(
  array: T[],
  value: T,
  start = 0,
  end = array.length
): T[] {
  const result = array.slice();
  return result.fill(value, start, end);
}
