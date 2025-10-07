/**
 * Creates a slice of an array with `n` elements dropped from the end.
 *
 * @example
 * ```ts
 * dropRight([1, 2, 3, 4], 2);
 * // → [1, 2]
 *
 * dropRight([1, 2, 3]);
 * // → [1, 2]
 * ```
 *
 * @param array - The array to process.
 * @param n - The number of elements to drop from the end. Defaults to `1`.
 * @returns A new array excluding the dropped elements from the end.
 *
 * @group Array
 * @since 1.0.0
 */
export function dropRight<T>(array: T[], n = 1): T[] {
  return array.slice(0, -n || array.length);
}
