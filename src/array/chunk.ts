/**
 * Splits an array into chunks of a specified size.
 *
 * @example
 * ```ts
 * chunk([1, 2, 3, 4, 5], 2);
 * // → [[1, 2], [3, 4], [5]]
 * ```
 *
 * @param array - The array to process.
 * @param size - The maximum size of each chunk. Defaults to `1`.
 * @returns A new array containing sub-arrays (chunks) of the specified size.
 *
 * @category Array
 * @since 1.0.0
 */
export function chunk<T>(array: T[], size: number = 1): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}
