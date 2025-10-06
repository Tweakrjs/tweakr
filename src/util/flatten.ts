export function flatten<T>(arr: any[]): T[] {
  const result: T[] = [];

  for (const val of arr) {
    if (Array.isArray(val)) {
      result.push(...flatten<T>(val));
    } else {
      result.push(val as T);
    }
  }

  return result;
}
