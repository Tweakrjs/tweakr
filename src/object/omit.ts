/**
 * Returns a new object excluding the specified keys.
 *
 * @example
 * ```ts
 * const obj = { a: 1, b: 2, c: 3 };
 * const result = omit(obj, ["b", "c"]);
 * console.log(result); // { a: 1 }
 * ```
 *
 * @param obj - The source object.
 * @param keys - An array of keys to omit from the object.
 * @returns A new object without the specified keys.
 *
 * @category Object
 * @since 1.1.0
 */
export function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const result: any = { ...obj };
  for (const key of keys) {
    delete result[key];
  }
  return result;
}
