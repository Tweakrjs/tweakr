/**
 * Creates a new object excluding properties that satisfy the predicate function.
 *
 * @example
 * ```ts
 * omitBy({ a: 1, b: '2', c: 3 }, val => typeof val === 'number');
 * // => { b: '2' }
 * ```
 *
 * @param obj - Source object
 * @param predicate - Function invoked per property
 * @returns A new object with excluded properties
 *
 * @group Object
 * @since 1.2.0
 */
export function omitBy<T extends object>(
  obj: T,
  predicate: (value: T[keyof T], key: keyof T) => boolean
): Partial<T> {
  const result: Partial<T> = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (!predicate(value, key)) {
        result[key] = value;
      }
    }
  }
  return result;
}
