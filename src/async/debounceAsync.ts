/**
 * Creates a debounced version of an asynchronous function with cancellation support.
 *
 * Only the last call within the specified delay is executed.
 * All previous pending promises are rejected with a "Cancelled due to debounce" error.
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
 * @typeParam T - Type of the async function to debounce.
 * @param fn - The async function to debounce.
 * @param delay - Milliseconds to wait before executing the function.
 * @returns Debounced async function with `.cancel()` method.
 *
 * @group Async
 * @since 1.2.0
 */
export function debounceAsync<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  delay: number
) {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let lastCall: {
    resolve: (value: any) => void;
    reject: (reason?: any) => void;
  } | null = null;

  const wrapper = (...args: Parameters<T>): Promise<ReturnType<T>> => {
    if (timeout) clearTimeout(timeout);

    // Reject previous pending call
    if (lastCall) lastCall.reject(new Error("Cancelled due to debounce"));

    let resolveFn!: (value: ReturnType<T>) => void;
    let rejectFn!: (reason?: any) => void;

    const promise = new Promise<ReturnType<T>>((resolve, reject) => {
      resolveFn = resolve;
      rejectFn = reject;
    });

    lastCall = { resolve: resolveFn, reject: rejectFn };

    timeout = setTimeout(async () => {
      try {
        const result = await fn(...args);
        lastCall?.resolve(result);
      } catch (err) {
        lastCall?.reject(err);
      } finally {
        lastCall = null;
      }
    }, delay);

    return promise;
  };

  wrapper.cancel = () => {
    if (timeout) clearTimeout(timeout);
    lastCall?.reject(new Error("Cancelled manually"));
    lastCall = null;
  };

  return wrapper;
}
