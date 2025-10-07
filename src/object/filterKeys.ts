/**
 * Creates a new object containing only the keys from the original object
 * that satisfy the given predicate function.
 *
 * @example
 * ```ts
 * const obj = { a: 1, b: 2, c: 3 };
 * const filtered = filterKeys(obj, key => key !== 'b');
 * console.log(filtered); // { a: 1, c: 3 }
 * ```
 *
 * @param obj - The source object to filter keys from.
 * @param predicate - A function that receives each key and returns `true` to keep it.
 * @returns A new object containing only the key-value pairs where the key passed the predicate.
 *
 * @category Object
 * @since 1.1.0
 */
export function filterKeys<T extends object, K extends keyof T>(
  obj: T,
  predicate: (key: K) => boolean
): Partial<T> {
  const result: Partial<T> = {};
  for (const key in obj) {
    if (
      Object.prototype.hasOwnProperty.call(obj, key) &&
      predicate(key as unknown as K)
    ) {
      result[key] = obj[key];
    }
  }
  return result;
}
