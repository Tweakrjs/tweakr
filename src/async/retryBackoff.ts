export interface RetryBackoffOptions {
  /** Maximum number of retries */
  retries?: number;
  /** Initial delay in ms */
  baseDelay?: number;
  /** Exponential factor for delay */
  factor?: number;
  /** Maximum delay cap in ms */
  maxDelay?: number;
}

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
