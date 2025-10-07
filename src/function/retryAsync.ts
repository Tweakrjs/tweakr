/**
 * Retry an async function until it succeeds or max attempts reached.
 *
 * @example
 * const fn = async () => { if(Math.random()<0.5) throw new Error(); return 'ok'; };
 * await retryAsync(fn, 3);
 *
 * @param fn - Async function to retry.
 * @param attempts - Maximum retry attempts.
 * @returns Result of successful function.
 *
 * @group Function
 * @since 1.2.0
 */
export async function retryAsync<T>(
  fn: () => Promise<T>,
  attempts: number = 3
): Promise<T> {
  let lastError: unknown;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError;
}
