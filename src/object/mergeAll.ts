/**
 * Deep merges multiple objects into one.
 *
 * @example
 * ```ts
 * mergeAll([{ a: 1 }, { b: 2 }, { a: 3 }]);
 * // => { a: 3, b: 2 }
 * ```
 *
 * @param objects - Array of objects to merge
 * @returns Merged object
 *
 * @group Object
 * @since 1.2.0
 */
export function mergeAll(objects: Record<string, any>[]): Record<string, any> {
  return objects.reduce((acc, obj) => {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const val = obj[key];
        if (
          val &&
          typeof val === "object" &&
          !Array.isArray(val) &&
          acc[key] &&
          typeof acc[key] === "object"
        ) {
          acc[key] = mergeAll([acc[key], val]);
        } else {
          acc[key] = val;
        }
      }
    }
    return acc;
  }, {} as Record<string, any>);
}
