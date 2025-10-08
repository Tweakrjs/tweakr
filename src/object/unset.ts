/**
 * Removes a property at the given path in an object.
 *
 * @example
 * ```ts
 * const obj = { a: { b: 2 } };
 * unset(obj, 'a.b');
 * console.log(obj); // { a: {} }
 * ```
 *
 * @param obj - Source object
 * @param path - Dot-separated path
 * @returns True if property existed and was removed
 *
 * @group Object
 * @since 1.2.0
 */
export function unset(obj: any, path: string): boolean {
  const keys = path.split(".");
  let temp = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!temp || typeof temp !== "object") return false;
    temp = temp[keys[i]];
  }
  const lastKey = keys[keys.length - 1];
  if (temp && lastKey in temp) {
    delete temp[lastKey];
    return true;
  }
  return false;
}
