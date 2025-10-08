/**
 * Performs a deep equality check between two values, handling nested objects, arrays, Maps, Sets, Dates, RegExps, and circular references.
 *
 * Optimizations for v1.2.0:
 * - Object key comparison uses a Set for O(1) lookups.
 * - Arrays short-circuit on primitive equality.
 * - Optional deep equality for Sets of objects.
 * - Early exit for mismatched types (Array vs Object, Map vs Object, etc.).
 *
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 * @param seen - Internal WeakMap to handle circular references (do not provide manually).
 * @returns `true` if the values are deeply equal, otherwise `false`.
 *
 * @group Object
 * @since 1.1.0
 */
export function deepEqual(a: any, b: any, seen = new WeakMap()): boolean {
  if (a === b) return true;

  if (typeof a !== typeof b) return false;
  if (a === null || b === null) return false;
  if (typeof a !== "object") return a === b;

  // Early exit for mismatched object types
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  if (a instanceof Map !== b instanceof Map) return false;
  if (a instanceof Set !== b instanceof Set) return false;
  if (a instanceof Date !== b instanceof Date) return false;
  if (a instanceof RegExp !== b instanceof RegExp) return false;

  // Circular reference check
  if (seen.has(a)) return seen.get(a) === b;
  seen.set(a, b);

  // Handle special objects
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
    const arrA = [...a];
    const arrB = [...b];
    for (const valA of arrA) {
      const found = arrB.some(
        (valB) =>
          valA === valB ||
          (typeof valA === "object" && deepEqual(valA, valB, seen))
      );
      if (!found) return false;
    }
    return true;
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[i]) continue; // fast path for primitives
      if (!deepEqual(a[i], b[i], seen)) return false;
    }
    return true;
  }

  // Compare plain objects
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) return false;

  const bKeySet = new Set(bKeys);
  for (const key of aKeys) {
    if (!bKeySet.has(key) || !deepEqual(a[key], b[key], seen)) return false;
  }

  return true;
}
