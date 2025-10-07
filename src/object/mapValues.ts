/**
 * Creates a new object with the same keys as the input object,
 * where each value is the result of applying the provided function
 * to the original value.
 *
 * @example
 * ```ts
 * const obj = { a: 1, b: 2 };
 * const doubled = mapValues(obj, (value) => value * 2);
 * console.log(doubled); // { a: 2, b: 4 }
 * ```
 *
 * @param obj - The object whose values will be transformed.
 * @param fn - A function that transforms each value of the object.
 * @returns A new object with transformed values.
 *
 * @group Object
 * @since 1.1.0
 */
export function mapValues<T extends object, U>(
  obj: T,
  fn: (value: T[keyof T], key: keyof T) => U
): { [K in keyof T]: U } {
  const result = {} as { [K in keyof T]: U };
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key as keyof T] = fn(obj[key], key as keyof T);
    }
  }
  return result;
}
