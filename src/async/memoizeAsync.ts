import { stableStringify } from "../internal/stableStringify";

/**
 * Memoizes an asynchronous function by caching its resolved promises
 * based on a deterministic key derived from its arguments.
 *
 * Supports deep object keys via {@link stableStringify} and allows a custom
 * cache resolver for flexible key generation.
 *
 * Ensures that concurrent calls with the same arguments
 * share the same in-flight promise.
 *
 * @typeParam T - The async function type to memoize.
 * @param fn - The asynchronous function whose results should be cached.
 * @param resolver - Optional custom cache key resolver.
 * @returns A memoized async function returning cached or pending results.
 *
 * @example
 * ```ts
 * const fetchUser = memoizeAsync(async (id: number) => {
 *   console.log("Fetching user:", id);
 *   return { id, name: "User" + id };
 * });
 *
 * await fetchUser(1); // Executes
 * await fetchUser(1); // Returns cached promise
 * ```
 *
 * @example
 * ```ts
 * // Custom cache resolver
 * const fetchByObject = memoizeAsync(
 *   async (user: { id: number }) => ({ ...user, fetched: true }),
 *   (user) => String(user.id)
 * );
 * await fetchByObject({ id: 5 }); // Computed
 * await fetchByObject({ id: 5 }); // Cached via resolver
 * ```
 *
 * @group Async
 * @since 1.2.0
 */
export function memoizeAsync<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  resolver?: (...args: Parameters<T>) => string
): (...args: Parameters<T>) => Promise<ReturnType<T>> {
  const cache = new Map<string, Promise<ReturnType<T>>>();
  const serialize = resolver ?? ((...args: any[]) => stableStringify(args));

  return (...args: Parameters<T>): Promise<ReturnType<T>> => {
    const key = serialize(...args);
    if (!cache.has(key)) cache.set(key, fn(...args));
    return cache.get(key)!;
  };
}
