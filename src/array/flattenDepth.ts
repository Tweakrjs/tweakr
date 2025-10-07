/**
 * Flattens an array up to the specified depth.
 *
 * @example
 * flattenDepth([1,[2,[3]]], 1); // [1,2,[3]]
 *
 * @param array - Input array
 * @param depth - Depth to flatten
 * @returns Flattened array
 *
 * @group Array
 * @since 1.2.0
 */
export function flattenDepth(array: any[], depth: number = 1): any[] {
  return depth > 0 ? array.flat(depth) : array.slice();
}
