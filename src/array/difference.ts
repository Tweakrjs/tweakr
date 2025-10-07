/**
 * Creates an array of values from the first array that are not present in the second array.
 *
 * @example
 * ```ts
 * difference([1, 2, 3, 4], [2, 4]);
 * // → [1, 3]
 * ```
 *
 * @param a - The array to inspect.
 * @param b - The array containing values to exclude.
 * @returns A new array containing elements from `a` that are not found in `b`.
 *
 * @category Array
 * @since 1.0.0
 */
export function difference<T>(a: T[], b: T[]): T[] {
  return a.filter((x) => !b.includes(x));
}
