/**
 * Returns an array of the values of an object.
 *
 * @example
 * ```ts
 * const obj = { a: 1, b: 2, c: 3 };
 * console.log(values(obj)); // [1, 2, 3]
 * ```
 *
 * @param obj - The object to extract values from.
 * @returns An array of the object's values.
 *
 * @group Object
 * @since 1.1.0
 */
export function values<T extends object>(obj: T): T[keyof T][] {
  return Object.values(obj);
}
