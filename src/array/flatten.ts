/**
 * Flattens an array one level deep.
 *
 * Nested arrays are expanded by one level, while other elements remain unchanged.
 *
 * @example
 * ```ts
 * flatten([1, [2, 3], [4, 5]]);
 * // → [1, 2, 3, 4, 5]
 *
 * flatten([[1], 2, [3, [4]]]);
 * // → [1, 2, 3, [4]]
 * ```
 *
 * @param array - The array to flatten one level deep.
 * @returns A new array with one level of nesting removed.
 *
 * @group Array
 * @since 1.0.0
 */
export function flatten<T>(array: (T | T[])[]): T[] {
  const result: T[] = [];
  for (const item of array) {
    if (Array.isArray(item)) {
      result.push(...item);
    } else {
      result.push(item);
    }
  }
  return result;
}
