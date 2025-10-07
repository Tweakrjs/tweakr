/**
 * Creates a throttled version of an asynchronous function.
 *
 * Ensures that the function is invoked at most once per specified interval.
 * Subsequent calls within the interval return the pending promise from the previous call.
 *
 * @example
 * ```ts
 * const fetchData = async (id: number) => {
 *   console.log("Fetching", id);
 *   return id;
 * };
 *
 * const throttled = throttleAsync(fetchData, 1000);
 * await throttled(1); // Executes
 * await throttled(2); // Returns previous pending promise
 * ```
 *
 * @typeParam T - The async function type.
 * @param fn - The asynchronous function to throttle.
 * @param interval - Minimum time in milliseconds between function invocations.
 * @returns A throttled async function with the same signature as `fn`.
 *
 * @group Async
 * @since 1.1.0
 */
export function throttleAsync<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  interval: number
) {
  let lastTime = 0;
  let pending: Promise<any> | null = null;

  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      pending = fn(...args);
    }
    return pending!;
  };
}
