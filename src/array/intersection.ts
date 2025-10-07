/**
 * Returns an array of elements common to both input arrays.
 *
 * @example
 * ```ts
 * intersection([1, 2, 3], [2, 3, 4]);
 * // → [2, 3]
 *
 * intersection(["a", "b"], ["c", "d"]);
 * // → []
 * ```
 *
 * @param a - The first array.
 * @param b - The second array.
 * @returns A new array containing the elements found in both arrays.
 *
 * @category Array
 * @since 1.0.0
 */
export function intersection<T>(a: T[], b: T[]): T[] {
  return a.filter((x) => b.includes(x));
}
