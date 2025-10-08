/**
 * Takes the first `n` elements from array.
 *
 * @example
 * take([1,2,3], 2); // [1,2]
 *
 * @param array - Input array
 * @param n - Number of elements
 * @returns Array of first `n` elements
 *
 * @group Array
 * @since 1.2.0
 */
export function take<T>(array: T[], n: number = 1): T[] {
  return array.slice(0, n);
}
