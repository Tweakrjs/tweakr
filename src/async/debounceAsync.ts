/**
 * Creates a debounced version of an asynchronous function.
 *
 * The returned function delays invoking the provided async function until
 * after `delay` milliseconds have elapsed since the last time it was called.
 *
 * If the function is called again before the delay expires, the previous invocation
 * is canceled — including its pending promise — ensuring only the latest call runs.
 *
 * @example
 * ```ts
 * const fetchData = async (q: string) => `Result for ${q}`;
 * const debouncedFetch = debounceAsync(fetchData, 300);
 *
 * debouncedFetch("apple");
 * debouncedFetch("banana"); // cancels "apple"
 *
 * await debouncedFetch("cherry");
 * // → "Result for cherry"
 * ```
 *
 * @typeParam T - The async function type being debounced.
 * @param fn - The asynchronous function to debounce.
 * @param delay - The number of milliseconds to delay execution.
 * @returns A debounced async function with a `.cancel()` method to manually cancel the pending call.
 *
 * @category Async
 * @since 1.0.0
 */
export function debounceAsync<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  delay: number
) {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let lastPromise: {
    promise: Promise<ReturnType<T>>;
    resolve: (value: ReturnType<T>) => void;
    reject: (reason?: any) => void;
  } | null = null;

  const wrapper = (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);

    if (lastPromise) {
      lastPromise?.reject(new Error("Cancelled due to debounce"));
    }

    let resolveFn: (value: ReturnType<T>) => void;
    let rejectFn: (reason?: any) => void;

    const promise = new Promise<ReturnType<T>>((resolve, reject) => {
      resolveFn = resolve;
      rejectFn = reject;
    });

    lastPromise = { promise, resolve: resolveFn!, reject: rejectFn! };

    timeout = setTimeout(async () => {
      try {
        const result = await fn(...args);
        lastPromise?.resolve(result);
      } catch (err) {
        lastPromise?.reject(err);
      } finally {
        lastPromise = null;
      }
    }, delay);

    return promise;
  };

  wrapper.cancel = () => {
    if (timeout) clearTimeout(timeout);
    lastPromise?.reject(new Error("Cancelled manually"));
    lastPromise = null;
  };

  return wrapper;
}
