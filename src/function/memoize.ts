function stableStringify(obj: any): string {
  if (obj === null) return "null";
  if (typeof obj !== "object") return String(obj);
  if (Array.isArray(obj)) return `[${obj.map(stableStringify).join(",")}]`;
  const keys = Object.keys(obj).sort();
  return `{${keys.map((k) => `${k}:${stableStringify(obj[k])}`).join(",")}}`;
}

export function memoize<T extends (...args: any[]) => any>(fn: T) {
  const cache = new Map<string, any>();
  return (...args: Parameters<T>): ReturnType<T> => {
    const key = stableStringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
