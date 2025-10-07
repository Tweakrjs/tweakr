/**
 * Inverts the keys and values of an object.
 *
 * Converts all values to strings and uses them as keys in the resulting object.
 *
 * @example
 * ```ts
 * const obj = { a: "1", b: "2" };
 * const inverted = invert(obj);
 * console.log(inverted); // { "1": "a", "2": "b" }
 * ```
 *
 * @param obj - The object whose keys and values will be inverted.
 * @returns A new object with keys and values swapped.
 *
 * @group Object
 * @since 1.1.0
 */
export function invert(
  obj: Record<string, string | number>
): Record<string, string> {
  const result: Record<string, string> = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[obj[key].toString()] = key;
    }
  }
  return result;
}
