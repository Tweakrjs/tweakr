/**
 * Returns an array of the keys of the given object.
 *
 * @example
 * ```ts
 * const obj = { a: 1, b: 2 };
 * const result = keys(obj);
 * console.log(result); // ["a", "b"]
 * ```
 *
 * @param obj - The object whose keys will be retrieved.
 * @returns An array of the object's keys.
 *
 * @group Object
 * @since 1.1.0
 */
export function keys<T extends object>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[];
}
