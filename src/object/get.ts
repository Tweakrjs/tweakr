/**
 * Safely retrieves a nested property from an object using a dot-separated path.
 *
 * @example
 * ```ts
 * const obj = { a: { b: { c: 42 } } };
 * const value = get(obj, "a.b.c");
 * console.log(value); // 42
 *
 * const missing = get(obj, "a.b.x", "default");
 * console.log(missing); // "default"
 * ```
 *
 * @param obj - The object to query.
 * @param path - Dot-separated path string (e.g., "a.b.c").
 * @param defaultValue - Value to return if the path is not found.
 * @returns The value at the specified path or the defaultValue if not found.
 *
 * @category Object
 * @since 1.1.0
 */
export function get(obj: any, path: string, defaultValue?: any): any {
  if (!path) return defaultValue;
  const keys = path.split(".");
  let result = obj;
  for (const key of keys) {
    if (result == null) return defaultValue;
    result = result[key];
  }
  return result === undefined ? defaultValue : result;
}
