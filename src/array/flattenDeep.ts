export function flattenDeep<T>(array: any[]): T[] {
  return array.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flattenDeep(val) : val),
    []
  );
}
