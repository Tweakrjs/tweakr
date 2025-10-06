export function pick<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const result: any = {};
  for (const key of keys) {
    if (key in obj) result[key] = obj[key];
  }
  return result;
}
