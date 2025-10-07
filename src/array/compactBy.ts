/**
 * Removes elements from array where iteratee returns falsy.
 *
 * @example
 * compactBy([{x:1},{x:0},{x:2}], o => o.x); // [{x:1},{x:2}]
 *
 * @param array - Input array
 * @param iteratee - Function to determine removal
 * @returns Filtered array
 *
 * @group Array
 * @since 1.2.0
 */
export function compactBy<T>(array: T[], iteratee: (v: T) => any): T[] {
  return array.filter((item) => Boolean(iteratee(item)));
}
