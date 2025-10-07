/**
 * Removes elements at specified index/indices.
 *
 * @example
 * removeIndex([1,2,3,4], 1); // [1,3,4]
 * removeIndex([1,2,3,4], [0,3]); // [2,3]
 *
 * @param array - Target array
 * @param indices - Index or indices to remove
 * @returns Filtered array
 *
 * @group Array
 * @since 1.2.0
 */
export function removeIndex<T>(array: T[], indices: number | number[]): T[] {
  const idxSet = new Set(Array.isArray(indices) ? indices : [indices]);
  return array.filter((_, i) => !idxSet.has(i));
}
