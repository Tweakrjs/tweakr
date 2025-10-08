/**
 * Runs an async function at most `n` times. Subsequent calls return the
 * result of the last invocation.
 *
 * The returned function caches the result of each invocation and ensures
 * `fn` is called no more than `n` times. After `n` calls, the cached
 * result is returned.
 *
 * @template T - The type of the async function to be invoked.
 * @param {number} n - The maximum number of times to call `fn`.
 * @param {T} fn - The async function to invoke.
 * @returns {(...args: Parameters<T>) => Promise<ReturnType<T> | undefined>}
 *   A function that calls `fn` up to `n` times and returns a Promise of the result.
 * @group Function
 * @since 1.2.0
 *
 * @example
 * const limited = onceNAsync(2, async () => {
 *   console.log("Running");
 *   return 42;
 * });
 * await limited(); // logs "Running", returns 42
 * await limited(); // logs "Running", returns 42
 * await limited(); // returns 42, does not log
 */
export function onceNAsync<T extends (...args: any[]) => Promise<any>>(
  n: number,
  fn: T
): (...args: Parameters<T>) => Promise<ReturnType<T> | undefined> {
  let count = 0;
  let result: ReturnType<T> | undefined;
  return async (...args: Parameters<T>) => {
    if (count < n) {
      result = await fn(...args);
      count++;
      return result;
    }
    return result;
  };
}
