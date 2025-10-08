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
    let skip = false;

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];

      // Stop if source key does not exist
      if (src === undefined || !(key in src)) {
        skip = true;
        break;
      }

      if (i === keys.length - 1) {
        // Only assign if key exists in source
        dest[key] = src[key];
      } else {
        if (!(key in dest)) dest[key] = {};
        src = src[key];
        dest = dest[key];
      }
    }

    // If path was skipped (key not in source), remove any empty object created
    if (skip) {
      const firstKey = keys[0];
      if (Object.keys(result[firstKey] || {}).length === 0) {
        delete result[firstKey];
      }
    }
  }

  return result;
}
