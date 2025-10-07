/**
 * Retries an asynchronous operation a specified number of times with delay between attempts.
 *
 * This utility is useful for handling transient errors (e.g., network requests)
 * by automatically retrying the provided async function on failure.
 *
 * @example
 * ```ts
 * let attempt = 0;
 * const result = await retry(async () => {
 *   if (attempt++ < 2) throw new Error("Failed");
 *   return "Success";
 * }, 3, 200);
 *
 * console.log(result); // "Success"
 * ```
 *
 * @template T - The type of the resolved value from the async function.
 * @param fn - The asynchronous function to retry.
 * @param retries - Maximum number of retry attempts. Defaults to `3`.
 * @param delay - Delay in milliseconds between retries. Defaults to `100`.
 * @returns A promise that resolves with the function’s result, or rejects after all retries fail.
 *
 * @throws Will throw the last encountered error after exhausting all retries.
 *
 * @category Async
 * @since 1.1.0
 */
export async function retry<T>(
  fn: () => Promise<T>,
  retries = 3,
  delay = 100
): Promise<T> {
  let lastError: any;
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      if (i < retries - 1) await new Promise((r) => setTimeout(r, delay));
    }
  }
  throw lastError;
}
