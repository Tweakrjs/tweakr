export function filterKeys<T extends object>(
  obj: T,
  predicate: (key: string) => boolean
): Partial<T> {
  const result: Partial<T> = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && predicate(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
