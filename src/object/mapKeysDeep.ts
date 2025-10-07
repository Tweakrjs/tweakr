/**
 * Recursively maps the keys of an object using the mapper function.
 *
 * @example
 * ```ts
 * mapKeysDeep({ a: 1, nested: { b: 2 } }, key => key.toUpperCase());
 * // => { A: 1, NESTED: { B: 2 } }
 * ```
 *
 * @param obj - Source object
 * @param mapper - Function applied to each key
 * @returns A new object with mapped keys
 *
 * @group Object
 * @since 1.2.0
 */
export function mapKeysDeep<T extends object>(
  obj: T,
  mapper: (key: string) => string
): any {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map((v) => mapKeysDeep(v, mapper));
  return Object.entries(obj).reduce((acc, [key, val]) => {
    acc[mapper(key)] = mapKeysDeep(val, mapper);
    return acc;
  }, {} as any);
}
