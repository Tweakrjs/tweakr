/**
 * Returns an array of `[key, value]` pairs from the given object.
 *
 * @example
 * ```ts
 * const obj = { a: 1, b: 2 };
 * const result = entries(obj);
 * console.log(result); // [['a', 1], ['b', 2]]
 * ```
 *
 * @param obj - The object to extract entries from.
 * @returns An array of key-value pairs from the object.
 *
 * @group Object
 * @since 1.1.0
 */
export function entries<T extends object>(obj: T): [keyof T, T[keyof T]][] {
  return Object.entries(obj) as any;
}
