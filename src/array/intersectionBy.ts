/**
 * Returns array of elements present in all arrays based on iteratee.
 *
 * @example
 * intersectionBy([{x:1}], [{x:1}, {x:2}], o => o.x); // [{x:1}]
 *
 * @param arrays - Arrays to intersect
 * @param iteratee - Function to compare values
 * @returns Intersection array
 *
 * @group Array
 * @since 1.2.0
 */
export function intersectionBy<T>(arrays: T[][], iteratee: (v: T) => any): T[] {
  if (arrays.length === 0) return [];
  const [first, ...rest] = arrays;
  return first.filter((item) =>
    rest.every((arr) => arr.some((i) => iteratee(i) === iteratee(item)))
  );
}
