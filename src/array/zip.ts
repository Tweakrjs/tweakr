/**
 * Creates an array of grouped elements, where the first element contains first elements of each array.
 *
 * @example
 * zip([1,2], ['a','b']); // [[1,'a'], [2,'b']]
 *
 * @param arrays - Arrays to zip
 * @returns Zipped array
 *
 * @group Array
 * @since 1.2.0
 */
export function zip(...arrays: any[][]): any[][] {
  const maxLength = Math.max(...arrays.map((arr) => arr.length));
  return Array.from({ length: maxLength }, (_, i) =>
    arrays.map((arr) => arr[i])
  );
}
