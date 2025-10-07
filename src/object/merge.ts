/**
 * Shallowly merges two objects into a new object.
 *
 * @example
 * ```ts
 * const obj1 = { a: 1, b: 2 };
 * const obj2 = { b: 3, c: 4 };
 * const merged = merge(obj1, obj2);
 * console.log(merged); // { a: 1, b: 3, c: 4 }
 * ```
 *
 * @param a - The first object.
 * @param b - The second object.
 * @returns A new object containing all keys from `a` and `b`.
 *
 * @group Object
 * @since 1.1.0
 */
export function merge<T extends object, U extends object>(a: T, b: U): T & U {
  return { ...a, ...b };
}
