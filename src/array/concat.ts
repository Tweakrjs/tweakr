/**
 * Merges multiple arrays or values into a single new array.
 *
 * Accepts any combination of arrays and individual elements.
 *
 * @example
 * ```ts
 * concat([1], [2, 3], 4);
 * // → [1, 2, 3, 4]
 * ```
 *
 * @param arrays - One or more arrays or values to concatenate.
 * @returns A new array containing all provided elements in order.
 *
 * @group Array
 * @since 1.0.0
 */
export function concat<T>(...arrays: (T | T[])[]): T[] {
  return ([] as T[]).concat(...arrays);
}
