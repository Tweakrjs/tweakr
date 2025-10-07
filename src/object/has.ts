/**
 * Checks if a nested path exists in an object.
 *
 * @example
 * ```ts
 * has({ a: { b: 2 } }, 'a.b'); // true
 * has({ a: { b: 2 } }, 'a.c'); // false
 * ```
 *
 * @param obj - Source object
 * @param path - Dot-separated path
 * @returns True if path exists
 *
 * @group Object
 * @since 1.2.0
 */
export function has(obj: any, path: string): boolean {
  return path.split(".").every((key) => {
    if (obj && typeof obj === "object" && key in obj) {
      obj = obj[key];
      return true;
    }
    return false;
  });
}
