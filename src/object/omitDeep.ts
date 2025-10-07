/**
 * Omits nested properties by paths from an object.
 *
 * @example
 * ```ts
 * omitDeep({ a: { b: 1, c: 2 } }, ['a.b']);
 * // => { a: { c: 2 } }
 * ```
 *
 * @param obj - Source object
 * @param paths - Array of dot-separated paths
 * @returns Object with paths removed
 *
 * @group Object
 * @since 1.2.0
 */
export function omitDeep(obj: any, paths: string[]): any {
  const result = { ...obj };

  const unset = (target: any, path: string): void => {
    const keys = path.split(".");
    let temp = target;
    for (let i = 0; i < keys.length - 1; i++) {
      if (!temp || typeof temp !== "object") return;
      temp = temp[keys[i]];
    }
    const lastKey = keys[keys.length - 1];
    if (temp && lastKey in temp) {
      delete temp[lastKey];
    }
  };

  for (const path of paths) {
    unset(result, path);
  }

  return result;
}
