/**
 * Returns elements in the first array not present in others, based on iteratee.
 *
 * @example
 * differenceBy([{x:1}], [{x:2}], o => o.x); // [{x:1}]
 *
 * @param array - Source array
 * @param values - Arrays to exclude
 * @param iteratee - Function to compare values
 * @returns Array of difference
 *
 * @group Array
 * @since 1.2.0
 */
export function differenceBy<T>(
  array: T[],
  values: T[],
  iteratee: (v: T) => any
): T[] {
  const set = new Set(values.map(iteratee));
  return array.filter((item) => !set.has(iteratee(item)));
}
