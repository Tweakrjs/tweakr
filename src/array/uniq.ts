/**
 * Creates a new array with all unique values, preserving the original order.
 *
 * Handles all value types (primitives and objects) efficiently using a Map.
 *
 * @example
 * ```ts
 * uniq([1, 2, 2, 3, 1]);
 * // → [1, 2, 3]
 *
 * const obj = { a: 1 };
 * uniq([obj, obj, { a: 1 }]);
 * // → [{ a: 1 }, { a: 1 }]
 * ```
 *
 * @param array - The array to filter for unique values.
 * @returns A new array containing only unique elements.
 *
 * @group Array
 * @since 1.2.0
 */
export function uniq<T>(array: T[]): T[] {
  const seen = new Map<any, boolean>();
  const result: T[] = [];

  for (const item of array) {
    // Use the object reference as key, primitives as themselves
    const key = item !== null && typeof item === "object" ? item : item;
    if (!seen.has(key)) {
      seen.set(key, true);
      result.push(item);
    }
  }

  return result;
}
