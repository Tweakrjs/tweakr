export function memoizeAsync<T extends (...args: any[]) => Promise<any>>(
  fn: T
) {
  const cache = new Map<string, Promise<ReturnType<T>>>();
  return (...args: Parameters<T>): Promise<ReturnType<T>> => {
    const key = JSON.stringify(args);
    if (!cache.has(key)) cache.set(key, fn(...args));
    return cache.get(key)!;
  };
}
