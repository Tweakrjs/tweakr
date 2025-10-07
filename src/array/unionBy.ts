/**
 * Similar to `union`, but uses an iteratee function to determine uniqueness.
 *
 * @example
 * unionBy([{x:1}], [{x:2}], o => o.x); // [{x:1}, {x:2}]
 *
 * @param arrays - Arrays to combine
 * @param iteratee - Function to compute uniqueness
 * @returns Array of unique values based on iteratee
 *
 * @group Array
 * @since 1.2.0
 */
export function unionBy<T>(arrays: T[][], iteratee: (v: T) => any): T[] {
  const seen = new Set();
  const result: T[] = [];
  arrays.flat().forEach((item) => {
    const key = iteratee(item);
    if (!seen.has(key)) {
      seen.add(key);
      result.push(item);
    }
  });
  return result;
}
