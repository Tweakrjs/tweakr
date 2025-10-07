/**
 * Retries an asynchronous function until a given condition returns `true` or the maximum number of retries is reached.
 *
 * Each attempt waits for the previous promise to resolve before checking the condition.
 * A delay is applied between retries.
 *
 * @example
 * ```ts
 * let counter = 0;
 * const result = await retryUntil(
 *   async () => {
 *     counter++;
 *     return counter;
 *   },
 *   (val) => val >= 3,
 *   5,
 *   100
 * );
 *
 * console.log(result); // 3
 * ```
 *
 * @template T - The type of the value returned by the async function.
 * @param fn - The asynchronous function to execute.
 * @param condition - A predicate function that checks if the result is acceptable.
 * @param retries - Maximum number of attempts. Defaults to `5`.
 * @param delay - Delay in milliseconds between retries. Defaults to `100`.
 * @returns A promise that resolves to the first result satisfying the condition, or the last result if none satisfy.
 *
 * @category Async
 * @since 1.1.0
 */
export async function retryUntil<T>(
  fn: () => Promise<T>,
  condition: (result: T) => boolean,
  retries = 5,
  delay = 100
): Promise<T> {
  let result: T;
  for (let i = 0; i < retries; i++) {
    result = await fn();
    if (condition(result)) return result;
    await new Promise((r) => setTimeout(r, delay));
  }
  return result!;
}
