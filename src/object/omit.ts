export function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const result: any = { ...obj };
  for (const key of keys) {
    delete result[key];
  }
  return result;
}
