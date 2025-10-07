/**
 * Takes the last `n` elements from array.
 *
 * @example
 * takeRight([1,2,3], 2); // [2,3]
 *
 * @param array - Input array
 * @param n - Number of elements
 * @returns Array of last `n` elements
 *
 * @group Array
 * @since 1.2.0
 */
export function takeRight<T>(array: T[], n: number = 1): T[] {
  return array.slice(-n);
}
