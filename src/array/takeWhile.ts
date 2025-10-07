/**
 * Takes elements from array while predicate is true.
 *
 * @example
 * takeWhile([1,2,3,4], n => n<3); // [1,2]
 *
 * @param array - Input array
 * @param predicate - Function to decide take
 * @returns Array of taken elements
 *
 * @group Array
 * @since 1.2.0
 */
export function takeWhile<T>(
  array: T[],
  predicate: (item: T, index: number) => boolean
): T[] {
  const result: T[] = [];
  for (let i = 0; i < array.length; i++) {
    if (!predicate(array[i], i)) break;
    result.push(array[i]);
  }
  return result;
}
