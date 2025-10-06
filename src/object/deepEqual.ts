export function deepEqual(a: any, b: any, seen = new WeakMap()): boolean {
  if (a === b) return true;

  if (typeof a !== typeof b) return false;
  if (a === null || b === null) return false;
  if (typeof a !== "object") return a === b;

  // Handle circular references
  if (seen.has(a)) return seen.get(a) === b;
  seen.set(a, b);

  // Handle Date
  if (a instanceof Date && b instanceof Date)
    return a.getTime() === b.getTime();

  // Handle RegExp
  if (a instanceof RegExp && b instanceof RegExp)
    return a.toString() === b.toString();

  // Handle Map
  if (a instanceof Map && b instanceof Map) {
    if (a.size !== b.size) return false;
    for (const [key, val] of a) {
      if (!b.has(key) || !deepEqual(val, b.get(key), seen)) return false;
    }
    return true;
  }

  // Handle Set
  if (a instanceof Set && b instanceof Set) {
    if (a.size !== b.size) return false;
    for (const val of a) {
      if (!b.has(val)) return false;
    }
    return true;
  }

  // Handle arrays
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i], seen)) return false;
    }
    return true;
  }

  // Handle plain objects
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) return false;

  for (const key of aKeys) {
    if (!bKeys.includes(key) || !deepEqual(a[key], b[key], seen)) return false;
  }

  return true;
}
