/**
 * Debounces a promise-returning function.
 *
 * This function ensures that the provided async function `fn` is only invoked
 * once per `wait` milliseconds, regardless of how many times the returned
 * function is called within that period. All calls within the wait period
 * will resolve with the same result of the last invocation.
 *
 * @group Util
 * @since 1.1.0
 *
 * @template T - A function type that returns a Promise.
 *
 * @param fn - The async function to debounce.
 * @param wait - The debounce interval in milliseconds.
 *
 * @returns A new function that wraps `fn` with debounce behavior.
 *          Each call returns a Promise that resolves to the result of `fn`.
 *
 * @example
 * ```ts
 * const fetchData = async (id: number) => {
 *   console.log('Fetching', id);
 *   return id * 2;
 * };
 *
 * const debouncedFetch = debouncePromise(fetchData, 200);
 *
 * debouncedFetch(1).then(console.log); // Will log 2
 * debouncedFetch(2).then(console.log); // Will also log 4 after 200ms, previous call resolves with 4 too
 * ```
 */
export function debouncePromise<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  wait: number
): (...args: Parameters<T>) => Promise<Awaited<ReturnType<T>>> {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let pendingResolvers: Array<{
    resolve: (value: Awaited<ReturnType<T>>) => void;
    reject: (reason?: any) => void;
  }> = [];
  let lastArgs: Parameters<T>;

  return (...args: Parameters<T>): Promise<Awaited<ReturnType<T>>> => {
    lastArgs = args;

    const promise = new Promise<Awaited<ReturnType<T>>>((resolve, reject) => {
      pendingResolvers.push({ resolve, reject });
    });

    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(async () => {
      try {
        const result = await fn(...lastArgs);
        pendingResolvers.forEach(({ resolve }) => resolve(result));
      } catch (err) {
        pendingResolvers.forEach(({ reject }) => reject(err));
      } finally {
        pendingResolvers = [];
        timeout = null;
      }
    }, wait);

    return promise;
  };
}
