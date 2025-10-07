/**
 * Safely gets a nested property value or returns default.
 *
 * @example
 * ```ts
 * getOrDefault({ a: { b: 2 } }, 'a.b', 0); // 2
 * getOrDefault({ a: { b: 2 } }, 'a.c', 0); // 0
 * ```
 *
 * @param obj - Source object
 * @param path - Dot-separated path
 * @param defaultValue - Value to return if path does not exist
 * @returns Nested value or default
 *
 * @group Object
 * @since 1.2.0
 */
export function getOrDefault(obj: any, path: string, defaultValue: any): any {
  const keys = path.split(".");
  let temp = obj;
  for (const key of keys) {
    if (temp && typeof temp === "object" && key in temp) {
      temp = temp[key];
    } else {
      return defaultValue;
    }
  }
  return temp;
}
