/**
 * Options for the `retryBackoff` function.
 */
export interface RetryBackoffOptions {
  /** Maximum number of retry attempts. Defaults to `3`. */
  retries?: number;
  /** Initial delay in milliseconds before the first retry. Defaults to `100`. */
  baseDelay?: number;
  /** Exponential factor for increasing the delay between retries. Defaults to `2`. */
  factor?: number;
  /** Maximum delay cap in milliseconds. Defaults to `10000`. */
  maxDelay?: number;
}

/**
 * Retries an asynchronous function using exponential backoff between attempts.
 *
 * This is useful for handling transient failures, especially in network or API calls,
 * by progressively increasing the delay between retries.
 *
 * @example
 * ```ts
 * let attempt = 0;
 * const result = await retryBackoff(async () => {
 *   if (attempt++ < 2) throw new Error("Failed");
 *   return "Success";
 * }, { retries: 5, baseDelay: 100, factor: 2 });
 *
 * console.log(result); // "Success"
 * ```
 *
 * @template T - The type of the resolved value from the async function.
 * @param fn - The asynchronous function to retry.
 * @param options - Optional configuration for retries, delay, and backoff factor.
 * @returns A promise resolving to the function's result, or rejecting after all retries fail.
 *
 * @throws Will throw the last encountered error after exhausting all retries.
 *
 * @group Async
 * @since 1.1.0
 */
export async function retryBackoff<T>(
  fn: () => Promise<T>,
  options: RetryBackoffOptions = {}
): Promise<T> {
  const {
    retries = 3,
    baseDelay = 100,
    factor = 2,
    maxDelay = 10000,
  } = options;

  let lastError: any;

  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;

      if (attempt < retries - 1) {
        // calculate exponential backoff delay
        let delay = Math.min(baseDelay * factor ** attempt, maxDelay);
        await new Promise((r) => setTimeout(r, delay));
      }
    }
  }

  throw lastError;
}
