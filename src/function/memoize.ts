/**
 * Creates a memoized version of a function, caching results based on arguments.
 *
 * Uses a stable stringification of arguments to support deep object keys.
 *
 * @example
 * ```ts
 * const add = (a: number, b: number) => a + b;
 * const memoizedAdd = memoize(add);
 * console.log(memoizedAdd(1, 2)); // 3, computed
 * console.log(memoizedAdd(1, 2)); // 3, retrieved from cache
 * ```
 *
 * @param fn - The function to memoize.
 * @returns A new function that caches results of `fn`.
 *
 * @category Function
 * @since 1.1.0
 */
export function memoize<T extends (...args: any[]) => any>(fn: T) {
  const cache = new Map<string, any>();

  function stableStringify(obj: any): string {
    if (obj === null) return "null";
    if (typeof obj !== "object") return String(obj);
    if (Array.isArray(obj)) return `[${obj.map(stableStringify).join(",")}]`;
    const keys = Object.keys(obj).sort();
    return `{${keys.map((k) => `${k}:${stableStringify(obj[k])}`).join(",")}}`;
  }

  return (...args: Parameters<T>): ReturnType<T> => {
    const key = stableStringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
