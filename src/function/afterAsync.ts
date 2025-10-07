/**
 * Returns an async function that only runs after `n` calls.
 *
 * @example
 * const fn = afterAsync(3, async () => 'done');
 * await fn(); // undefined
 * await fn(); // undefined
 * await fn(); // 'done'
 *
 * @param n - Number of calls before function executes.
 * @param fn - Async function to execute.
 * @returns Async function.
 *
 * @group Function
 * @since 1.2.0
 */
export function afterAsync<T extends (...args: any[]) => Promise<any>>(
  n: number,
  fn: T
): (...args: Parameters<T>) => Promise<ReturnType<T> | undefined> {
  let count = 0;
  return async (...args: Parameters<T>) => {
    count++;
    if (count >= n) return fn(...args);
  };
}
