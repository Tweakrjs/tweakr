/**
 * Runs an async function only once per N calls.
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
