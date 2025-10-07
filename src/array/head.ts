/**
 * Returns the first element of an array.
 *
 * @example
 * ```ts
 * head([1, 2, 3]);
 * // → 1
 *
 * head([]);
 * // → undefined
 * ```
 *
 * @param array - The array to query.
 * @returns The first element of the array, or `undefined` if the array is empty.
 *
 * @group Array
 * @since 1.0.0
 */
export function head<T>(array: T[]): T | undefined {
  return array[0];
}
