/**
 * Returns the last element of an array.
 *
 * @example
 * ```ts
 * last([1, 2, 3]);
 * // → 3
 *
 * last([]);
 * // → undefined
 * ```
 *
 * @param array - The array to query.
 * @returns The last element of the array, or `undefined` if the array is empty.
 *
 * @group Array
 * @since 1.0.0
 */
export function last<T>(array: T[]): T | undefined {
  return array[array.length - 1];
}
