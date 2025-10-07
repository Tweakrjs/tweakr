/**
 * Creates a slice of an array with `n` elements dropped from the start.
 *
 * @example
 * ```ts
 * drop([1, 2, 3, 4], 2);
 * // → [3, 4]
 *
 * drop([1, 2, 3]);
 * // → [2, 3]
 * ```
 *
 * @param array - The array to process.
 * @param n - The number of elements to drop from the start. Defaults to `1`.
 * @returns A new array excluding the dropped elements.
 *
 * @category Array
 * @since 1.0.0
 */
export function drop<T>(array: T[], n = 1): T[] {
  return array.slice(n);
}
