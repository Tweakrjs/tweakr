/**
 * Recursively assigns properties from source into target.
 *
 * @example
 * ```ts
 * assignDeep({ a: { b: 1 } }, { a: { c: 2 } });
 * // => { a: { b: 1, c: 2 } }
 * ```
 *
 * @param target - Target object
 * @param source - Source object
 * @returns Target with assigned properties
 *
 * @group Object
 * @since 1.2.0
 */
export function assignDeep(target: any, source: any): any {
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      const val = source[key];
      if (
        val &&
        typeof val === "object" &&
        !Array.isArray(val) &&
        target[key] &&
        typeof target[key] === "object"
      ) {
        assignDeep(target[key], val);
      } else {
        target[key] = val;
      }
    }
  }
  return target;
}
