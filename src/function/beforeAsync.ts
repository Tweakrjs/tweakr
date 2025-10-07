/**
 * Returns an async function that only runs for the first `n` calls.
 *
 * @example
 * const fn = beforeAsync(2, async () => 'ok');
 * await fn(); // 'ok'
 * await fn(); // 'ok'
 * await fn(); // undefined
 *
 * @param n - Number of times function can be called.
 * @param fn - Async function to execute.
 * @returns Async function.
 *
 * @group Function
 * @since 1.2.0
 */
export function beforeAsync<T extends (...args: any[]) => Promise<any>>(
  n: number,
  fn: T
): (...args: Parameters<T>) => Promise<ReturnType<T> | undefined> {
  let count = 0;
  return async (...args: Parameters<T>) => {
    if (++count <= n) return fn(...args);
  };
}
