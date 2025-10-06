export function filterKeys<T extends object, K extends keyof T>(
  obj: T,
  predicate: (key: K) => boolean
): Partial<T> {
  const result: Partial<T> = {};
  for (const key in obj) {
    if (
      Object.prototype.hasOwnProperty.call(obj, key) &&
      predicate(key as unknown as K)
    ) {
      result[key] = obj[key];
    }
  }
  return result;
}
