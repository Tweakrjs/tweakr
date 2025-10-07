/**
 * Drops elements from array while predicate is true.
 *
 * @example
 * dropWhile([1,2,3,4], n => n<3); // [3,4]
 *
 * @param array - Input array
 * @param predicate - Function to decide drop
 * @returns Remaining array
 *
 * @group Array
 * @since 1.2.0
 */
export function dropWhile<T>(
  array: T[],
  predicate: (item: T, index: number) => boolean
): T[] {
  let i = 0;
  while (i < array.length && predicate(array[i], i)) i++;
  return array.slice(i);
}
