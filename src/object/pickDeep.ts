/**
 * Picks nested properties by paths from an object.
 *
 * @example
 * ```ts
 * pickDeep({ a: { b: 1, c: 2 } }, ['a.b']);
 * // => { a: { b: 1 } }
 * ```
 *
 * @param obj - Source object
 * @param paths - Array of dot-separated paths
 * @returns Object containing only selected paths
 *
 * @group Object
 * @since 1.2.0
 */
export function pickDeep(obj: any, paths: string[]): any {
  const result: any = {};
  for (const path of paths) {
    const keys = path.split(".");
    let src = obj;
    let dest = result;
    for (let i = 0; i < keys.length; i++) {
      if (src === undefined) break;
      const key = keys[i];
      if (i === keys.length - 1) {
        if (key in src) dest[key] = src[key];
      } else {
        if (!(key in dest)) dest[key] = {};
        src = src[key];
        dest = dest[key];
      }
    }
  }
  return result;
}
