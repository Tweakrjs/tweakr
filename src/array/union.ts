/**
 * Creates an array of unique values from all given arrays.
 *
 * @example
 * union([1, 2], [2, 3]); // [1, 2, 3]
 *
 * @param arrays - Arrays to combine
 * @returns Array of unique values
 *
 * @group Array
 * @since 1.2.0
 */
export function union<T>(...arrays: T[][]): T[] {
  return Array.from(new Set(arrays.flat()));
}
