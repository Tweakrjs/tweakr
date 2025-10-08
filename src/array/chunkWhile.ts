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
  predicate: (item: T) => boolean
): T[][] {
  if (array.length === 0) return [];

  const result: T[][] = [];

  let chunk: T[] = [array[0]];

  let isCurrentChunkConditionMet = predicate(array[0]);

  for (let i = 1; i < array.length; i++) {
    const current = array[i];
    const isCurrentConditionMet = predicate(current);
    if (isCurrentConditionMet === isCurrentChunkConditionMet) {
      chunk.push(current);
    } else {
      result.push(chunk);
      chunk = [current];
      isCurrentChunkConditionMet = isCurrentConditionMet;
    }
  }

  result.push(chunk);
  return result;
}
