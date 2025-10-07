/**
 * Creates a new object containing only the key-value pairs from the original object
 * whose values satisfy the given predicate function.
 *
 * @example
 * ```ts
 * const obj = { a: 1, b: 2, c: 3 };
 * const filtered = filterValues(obj, value => value > 1);
 * console.log(filtered); // { b: 2, c: 3 }
 * ```
 *
 * @param obj - The source object to filter values from.
 * @param predicate - A function that receives each value and key, returning `true` to keep the pair.
 * @returns A new object containing only the key-value pairs where the value passed the predicate.
 *
 * @group Object
 * @since 1.1.0
 */
export function filterValues<T extends object>(
  obj: T,
  predicate: (value: T[keyof T], key: keyof T) => boolean
): Partial<T> {
  const result: Partial<T> = {};
  for (const key in obj) {
    if (
      Object.prototype.hasOwnProperty.call(obj, key) &&
      predicate(obj[key], key)
    ) {
      result[key] = obj[key];
    }
  }
  return result;
}
