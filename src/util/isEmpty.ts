/**
 * Checks if a value is "empty".
 *
 * This function considers the following as empty:
 * - `null` or `undefined`
 * - Strings or arrays with `length === 0`
 * - `Map` or `Set` with `size === 0`
 * - Plain objects with no own enumerable properties
 *
 * Numbers, booleans, functions, and other non-collection types are considered not empty.
 *
 * @group Util
 * @since 1.1.0
 *
 * @param value - The value to check for emptiness.
 * @returns `true` if the value is considered empty, `false` otherwise.
 *
 * @example
 * ```ts
 * isEmpty(null);          // true
 * isEmpty([]);            // true
 * isEmpty("");            // true
 * isEmpty({});            // true
 * isEmpty(new Map());     // true
 * isEmpty([1, 2, 3]);     // false
 * isEmpty({ a: 1 });      // false
 * ```
 */
export function isEmpty(value: any): boolean {
  if (value == null) return true; // null or undefined
  if (typeof value === "string" || Array.isArray(value))
    return value.length === 0;
  if (value instanceof Map || value instanceof Set) return value.size === 0;
  if (typeof value === "object") return Object.keys(value).length === 0;
  return false; // numbers, booleans, functions are not "empty"
}
