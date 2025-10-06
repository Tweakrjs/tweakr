function stableStringify(obj: any): string {
  if (obj === null) return "null";
  if (typeof obj !== "object") return String(obj);
  if (Array.isArray(obj)) return `[${obj.map(stableStringify).join(",")}]`;
  const keys = Object.keys(obj).sort();
  return `{${keys.map((k) => `${k}:${stableStringify(obj[k])}`).join(",")}}`;
}

export function memoizeAsync<T extends (...args: any[]) => Promise<any>>(
  fn: T
) {
  const cache = new Map<string, Promise<ReturnType<T>>>();
  return (...args: Parameters<T>): Promise<ReturnType<T>> => {
    const key = stableStringify(args);
    if (!cache.has(key)) cache.set(key, fn(...args));
    return cache.get(key)!;
  };
}
