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
