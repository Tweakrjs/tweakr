/**
 * Recursively merges properties of the `source` object into the `target` object.
 * Nested plain objects are merged, while arrays and primitive values are replaced.
 *
 * @example
 * ```ts
 * const obj1 = { a: 1, b: { x: 10 } };
 * const obj2 = { b: { y: 20 }, c: 3 };
 * const merged = deepMerge(obj1, obj2);
 * console.log(merged); // { a: 1, b: { x: 10, y: 20 }, c: 3 }
 * ```
 *
 * @param target - The target object to merge into.
 * @param source - The source object whose properties will be merged.
 * @returns A new object containing merged properties from both `target` and `source`.
 *
 * @group Object
 * @since 1.1.0
 */
export function deepMerge<T extends object, U extends object>(
  target: T,
  source: U
): T & U {
  const result = { ...target } as any;

  for (const key in source) {
    if (!Object.prototype.hasOwnProperty.call(source, key)) continue;

    const sourceValue = source[key];
    const targetValue = result[key];

    if (
      sourceValue &&
      typeof sourceValue === "object" &&
      !Array.isArray(sourceValue) &&
      targetValue &&
      typeof targetValue === "object" &&
      !Array.isArray(targetValue)
    ) {
      result[key] = deepMerge(targetValue, sourceValue); // recursive merge
    } else {
      result[key] = sourceValue;
    }
  }

  return result;
}
