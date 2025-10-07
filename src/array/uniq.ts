/**
 * Creates a new array with all unique values, preserving the original order.
 *
 * Handles both primitive and object references separately to ensure
 * proper uniqueness without altering the original array.
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
 * @since 1.0.0
 */
export function uniq<T>(array: T[]): T[] {
  const seenPrimitives = new Set<T>();
  const seenObjects = new Set<object>();
  const result: T[] = [];

  for (const item of array) {
    if (item !== null && typeof item === "object") {
      if (!seenObjects.has(item as object)) {
        seenObjects.add(item as object);
        result.push(item);
      }
    } else {
      if (!seenPrimitives.has(item)) {
        seenPrimitives.add(item);
        result.push(item);
      }
    }
  }

  return result;
}
