/**
 * Wraps an asynchronous function with a timeout.
 *
 * If the wrapped function does not resolve or reject within the specified time,
 * the returned promise rejects with a "Timeout" error.
 *
 * @example
 * ```ts
 * const fetchData = async () => {
 *   await new Promise(r => setTimeout(r, 2000));
 *   return "Done";
 * };
 *
 * const result = withTimeout(fetchData, 1000)();
 * result.catch(err => console.log(err.message)); // "Timeout"
 * ```
 *
 * @typeParam T - The type of the async function.
 * @param fn - The asynchronous function to wrap.
 * @param ms - Timeout duration in milliseconds.
 * @returns A new function that returns a promise which rejects if the timeout is exceeded.
 *
 * @group Async
 * @since 1.1.0
 */
export function withTimeout<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  ms: number
) {
  return (...args: Parameters<T>): Promise<ReturnType<T>> =>
    Promise.race([
      fn(...args),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), ms)
      ),
    ]) as Promise<ReturnType<T>>;
}
