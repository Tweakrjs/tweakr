/**
 * Creates a new object composed of the properties that satisfy the predicate function.
 *
 * @example
 * ```ts
 * pickBy({ a: 1, b: '2', c: 3 }, val => typeof val === 'number');
 * // => { a: 1, c: 3 }
 * ```
 *
 * @param obj - Source object
 * @param predicate - Function invoked per property
 * @returns A new object with filtered properties
 *
 * @group Object
 * @since 1.2.0
 */
export function pickBy<T extends object>(
  obj: T,
  predicate: (value: T[keyof T], key: keyof T) => boolean
): Partial<T> {
  const result: Partial<T> = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (predicate(value, key)) {
        result[key] = value;
      }
    }
  }
  return result;
}
