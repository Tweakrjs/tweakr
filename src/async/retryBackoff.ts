export async function retryBackoff<T>(
  fn: () => Promise<T>,
  retries = 3,
  baseDelay = 100
): Promise<T> {
  let lastError: any;
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      const delay = baseDelay * 2 ** i;
      if (i < retries - 1) await new Promise((r) => setTimeout(r, delay));
    }
  }
  throw lastError;
}
