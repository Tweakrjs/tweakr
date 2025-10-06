export function filterValues<T extends object>(
  obj: T,
  predicate: (value: any) => boolean
): Partial<T> {
  const result: Partial<T> = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && predicate(obj[key])) {
      result[key] = obj[key];
    }
  }
  return result;
}
