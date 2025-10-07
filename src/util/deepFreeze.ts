/**
 * Recursively freezes an object and all of its nested properties.
 *
 * This function ensures that an object, including all nested objects,
 * cannot be modified. It safely handles circular references using a WeakSet.
 *
 * @group Util
 * @since 1.1.0
 *
 * @template T - The type of the object to freeze.
 *
 * @param obj - The object to deeply freeze.
 * @param seen - A WeakSet used internally to track already frozen objects
 *               to prevent infinite recursion (usually not set by the caller).
 *
 * @returns The same object `obj`, now deeply frozen.
 *
 * @example
 * ```ts
 * const obj = { a: 1, b: { c: 2 } };
 * const frozenObj = deepFreeze(obj);
 *
 * frozenObj.a = 10;       // No effect in strict mode
 * frozenObj.b.c = 20;     // No effect in strict mode
 * ```
 */
export function deepFreeze<T>(obj: T, seen = new WeakSet()): T {
  // Only freeze objects (skip null, primitives)
  if (obj === null || typeof obj !== "object") return obj;

  // Prevent infinite recursion on circular references
  if (seen.has(obj)) return obj;
  seen.add(obj);

  Object.freeze(obj);

  // Recursively freeze all own properties
  Object.getOwnPropertyNames(obj).forEach((prop) => {
    const value = (obj as any)[prop];
    if (value && typeof value === "object" && !Object.isFrozen(value)) {
      deepFreeze(value, seen);
    }
  });

  return obj;
}
