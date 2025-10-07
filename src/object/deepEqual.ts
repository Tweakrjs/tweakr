/**
 * Performs a deep equality check between two values, handling nested objects, arrays, Maps, Sets, Dates, RegExps, and circular references.
 *
 * @example
 * ```ts
 * const obj1 = { a: 1, b: { c: 2 } };
 * const obj2 = { a: 1, b: { c: 2 } };
 * console.log(deepEqual(obj1, obj2)); // true
 *
 * const arr1 = [1, 2, [3]];
 * const arr2 = [1, 2, [3]];
 * console.log(deepEqual(arr1, arr2)); // true
 * ```
 *
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 * @param seen - Internal WeakMap to handle circular references (do not provide manually).
 * @returns `true` if the values are deeply equal, otherwise `false`.
 *
 * @category Object
 * @since 1.1.0
 */
export function deepEqual(a: any, b: any, seen = new WeakMap()): boolean {
  if (a === b) return true;

  if (typeof a !== typeof b) return false;
  if (a === null || b === null) return false;
  if (typeof a !== "object") return a === b;

  if (seen.has(a)) return seen.get(a) === b;
  seen.set(a, b);

  if (a instanceof Date && b instanceof Date)
    return a.getTime() === b.getTime();
  if (a instanceof RegExp && b instanceof RegExp)
    return a.toString() === b.toString();

  if (a instanceof Map && b instanceof Map) {
    if (a.size !== b.size) return false;
    for (const [key, val] of a) {
      if (!b.has(key) || !deepEqual(val, b.get(key), seen)) return false;
    }
    return true;
  }

  if (a instanceof Set && b instanceof Set) {
    if (a.size !== b.size) return false;
    for (const val of a) {
      if (!b.has(val)) return false;
    }
    return true;
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i], seen)) return false;
    }
    return true;
  }

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) return false;

  for (const key of aKeys) {
    if (!bKeys.includes(key) || !deepEqual(a[key], b[key], seen)) return false;
  }

  return true;
}
