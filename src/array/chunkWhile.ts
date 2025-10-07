/**
 * Splits array into chunks while predicate returns true.
 *
 * @example
 * chunkWhile([1,2,3,4], n => n<3); // [[1,2],[3,4]]
 *
 * @param array - Input array
 * @param predicate - Chunking predicate
 * @returns Array of chunks
 *
 * @group Array
 * @since 1.2.0
 */
export function chunkWhile<T>(
  array: T[],
  predicate: (item: T, index: number) => boolean
): T[][] {
  const result: T[][] = [];
  let chunk: T[] = [];
  array.forEach((item, i) => {
    if (predicate(item, i)) {
      chunk.push(item);
    } else {
      if (chunk.length) result.push(chunk);
      chunk = [item];
    }
  });
  if (chunk.length) result.push(chunk);
  return result;
}
