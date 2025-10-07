function stableStringify(obj: any): string {
  if (obj === null) return "null";
  if (typeof obj !== "object") return String(obj);
  if (Array.isArray(obj)) return `[${obj.map(stableStringify).join(",")}]`;
  const keys = Object.keys(obj).sort();
  return `{${keys.map((k) => `${k}:${stableStringify(obj[k])}`).join(",")}}`;
}

/**
 * Memoizes an asynchronous function by caching results based on stable argument serialization.
 *
 * Subsequent calls with the same arguments return the cached promise,
 * avoiding redundant asynchronous executions.
 *
 * @example
 * ```ts
 * const fetchUser = memoizeAsync(async (id: number) => {
 *   console.log("Fetching user:", id);
 *   return { id, name: "User" + id };
 * });
 *
 * await fetchUser(1); // Executes
 * await fetchUser(1); // Returns cached result
 * ```
 *
 * @typeParam T - The async function type to memoize.
 * @param fn - The asynchronous function to memoize.
 * @returns A memoized version of the input async function.
 *
 * @category Async
 * @since 1.0.0
 */
export function memoizeAsync<T extends (...args: any[]) => Promise<any>>(
  fn: T
) {
  const cache = new Map<string, Promise<ReturnType<T>>>();
  return (...args: Parameters<T>): Promise<ReturnType<T>> => {
    const key = stableStringify(args);
    if (!cache.has(key)) cache.set(key, fn(...args));
    return cache.get(key)!;
  };
}
