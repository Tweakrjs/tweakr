/**
 * Recursively maps the values of an object using the mapper function.
 *
 * @example
 * ```ts
 * mapValuesDeep({ a: 1, nested: { b: 2 } }, val => val * 2);
 * // => { a: 2, nested: { b: 4 } }
 * ```
 *
 * @param obj - Source object
 * @param mapper - Function applied to each value
 * @returns A new object with mapped values
 *
 * @group Object
 * @since 1.2.0
 */
export function mapValuesDeep<T extends object>(
  obj: T,
  mapper: (value: any, key: string) => any
): any {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map((v) => mapValuesDeep(v, mapper));
  return Object.entries(obj).reduce((acc, [key, val]) => {
    acc[key] =
      typeof val === "object" && val !== null
        ? mapValuesDeep(val, mapper)
        : mapper(val, key);
    return acc;
  }, {} as any);
}
