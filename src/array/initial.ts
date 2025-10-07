/**
 * Returns all elements of an array except the last one.
 *
 * @example
 * ```ts
 * initial([1, 2, 3]);
 * // → [1, 2]
 *
 * initial([5]);
 * // → []
 * ```
 *
 * @param array - The array to process.
 * @returns A new array containing all elements except the last one.
 *
 * @category Array
 * @since 1.0.0
 */
export function initial<T>(array: T[]): T[] {
  return array.slice(0, -1);
}
