/**
 * Inverts an object by mapping values to keys. If multiple keys have same value, result is array.
 *
 * @example
 * ```ts
 * invertBy({ a: 1, b: 2, c: 1 });
 * // => { '1': ['a','c'], '2': ['b'] }
 * ```
 *
 * @param obj - Source object
 * @returns Inverted object
 *
 * @group Object
 * @since 1.2.0
 */
export function invertBy<T extends Record<string, string | number>>(
  obj: T
): Record<string, string[]> {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    const strVal = String(val);
    if (!acc[strVal]) acc[strVal] = [];
    acc[strVal].push(key);
    return acc;
  }, {} as Record<string, string[]>);
}
