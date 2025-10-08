import { stableStringify } from "../internal/stableStringify";

/**
 * Creates a memoized version of a function by caching its return values
 * based on a deterministic key derived from its arguments.
 *
 * Supports deep object keys via {@link stableStringify} and allows a custom
 * cache resolver for advanced use cases.
 *
 * @typeParam T - The function type to memoize.
 * @param fn - The function whose results should be cached.
 * @param resolver - Optional custom function to generate cache keys from arguments.
 * @returns A new function that caches results of `fn` calls.
 *
 * @example
 * ```ts
 * const add = (a: number, b: number) => a + b;
 * const memoizedAdd = memoize(add);
 *
 * memoizedAdd(1, 2); // Computes result: 3
 * memoizedAdd(1, 2); // Returns cached result: 3
 * ```
 *
 * @example
 * ```ts
 * // Custom cache resolver
 * const memoized = memoize(
 *   (obj: { id: number }) => obj.id * 2,
 *   (obj) => String(obj.id)
 * );
 * memoized({ id: 1 }); // Computed
 * memoized({ id: 1 }); // Cached via resolver
 * ```
 *
 * @group Function
 * @since 1.2.0
 */
export function memoize<T extends (...args: any[]) => any>(
  fn: T,
  resolver?: (...args: Parameters<T>) => string
): (...args: Parameters<T>) => ReturnType<T> {
  const cache = new Map<string, ReturnType<T>>();
  const serialize = resolver ?? ((...args: any[]) => stableStringify(args));

  return (...args: Parameters<T>): ReturnType<T> => {
    const key = serialize(...args);
    if (cache.has(key)) return cache.get(key)!;
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
