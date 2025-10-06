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
