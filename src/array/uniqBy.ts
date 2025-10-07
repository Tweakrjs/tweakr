/**
 * Creates a new array with unique elements determined by the result of an iteratee function.
 *
 * The iteratee is invoked for each element to generate a key by which uniqueness is computed.
 * Elements that produce the same key are treated as duplicates and only the first occurrence is kept.
 *
 * @example
 * ```ts
 * uniqBy([1.2, 2.3, 2.4, 3.1], Math.floor);
 * // → [1.2, 2.3, 3.1]
 *
 * uniqBy([{ id: 1 }, { id: 2 }, { id: 1 }], x => x.id);
 * // → [{ id: 1 }, { id: 2 }]
 * ```
 *
 * @param array - The array to process.
 * @param iteratee - The function invoked per element to generate the key for comparison.
 * @returns A new array containing unique elements based on the computed key.
 *
 * @category Array
 * @since 1.0.0
 */
export function uniqBy<T>(array: T[], iteratee: (item: T) => any): T[] {
  const seen = new Set();
  return array.filter((item) => {
    const key = iteratee(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
