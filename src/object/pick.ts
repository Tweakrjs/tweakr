/**
 * Returns a new object containing only the specified keys.
 *
 * @example
 * ```ts
 * const obj = { a: 1, b: 2, c: 3 };
 * const result = pick(obj, ["a", "c"]);
 * console.log(result); // { a: 1, c: 3 }
 * ```
 *
 * @param obj - The source object.
 * @param keys - An array of keys to include in the new object.
 * @returns A new object with only the specified keys.
 *
 * @group Object
 * @since 1.1.0
 */
export function pick<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const result: any = {};
  for (const key of keys) {
    if (key in obj) result[key] = obj[key];
  }
  return result;
}
