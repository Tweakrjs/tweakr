/**
 * Sets a value at the given path of an object, creating nested objects if necessary.
 *
 * @example
 * ```ts
 * const obj = {};
 * set(obj, "a.b.c", 42);
 * console.log(obj); // { a: { b: { c: 42 } } }
 * ```
 *
 * @param obj - The target object.
 * @param path - Dot-separated string path where the value should be set.
 * @param value - The value to set at the specified path.
 *
 * @category Object
 * @since 1.1.0
 */
export function set(obj: any, path: string, value: any): void {
  if (!path) return;
  const keys = path.split(".");
  let current = obj;
  keys.forEach((key, index) => {
    if (index === keys.length - 1) {
      current[key] = value;
    } else {
      if (!current[key] || typeof current[key] !== "object") current[key] = {};
      current = current[key];
    }
  });
}
