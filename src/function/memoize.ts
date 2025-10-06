export function memoize<T extends (...args: any[]) => any>(fn: T) {
  const cache = new Map<string, any>();
  return (...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
