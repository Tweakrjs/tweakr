/**
 * Performs a deep clone of an object, handling nested objects, arrays, Maps, Sets, Dates, and RegExps.
 * Supports circular references using a WeakMap.
 *
 * @example
 * ```ts
 * const obj = { a: 1, b: { c: 2 } };
 * const clone = cloneDeep(obj);
 * console.log(clone.b !== obj.b); // true
 *
 * const set = new Set([1, 2]);
 * const clonedSet = cloneDeep(set);
 * console.log(clonedSet !== set); // true
 * ```
 *
 * @param obj - The object to deeply clone.
 * @param hash - Internal WeakMap to handle circular references (do not provide manually).
 * @returns A deep-cloned copy of the input object.
 *
 * @category Object
 * @since 1.1.0
 */
export function cloneDeep<T>(obj: T, hash = new WeakMap()): T {
  if (obj === null || typeof obj !== "object") return obj;

  if (hash.has(obj)) return hash.get(obj);

  if (obj instanceof Date) return new Date(obj.getTime()) as any;
  if (obj instanceof RegExp) return new RegExp(obj) as any;
  if (obj instanceof Map)
    return new Map(
      Array.from(obj.entries()).map(([k, v]) => [k, cloneDeep(v, hash)])
    ) as any;
  if (obj instanceof Set)
    return new Set(
      Array.from(obj.values()).map((v) => cloneDeep(v, hash))
    ) as any;

  if (Array.isArray(obj)) {
    const arr: any = [];
    hash.set(obj, arr);
    for (let i = 0; i < obj.length; i++) {
      arr[i] = cloneDeep(obj[i], hash);
    }
    return arr as any;
  }

  const result: any = {};
  hash.set(obj, result);
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = cloneDeep((obj as any)[key], hash);
    }
  }
  return result;
}
