export function groupBy<T, K extends keyof any>(
  array: T[],
  keyFn: (item: T) => K | undefined | null
): Record<string, T[]> {
  const result: Record<string, T[]> = {};

  for (const item of array) {
    let key = keyFn(item);
    if (key === undefined || key === null) {
      key = "__undefined__" as K; // Type assertion to satisfy TS
    }
    const stringKey = String(key);
    if (!result[stringKey]) {
      result[stringKey] = [];
    }
    result[stringKey].push(item);
  }

  return result;
}
