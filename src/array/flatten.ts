export function flatten<T>(array: any[]): T[] {
  return array.reduce((acc, val) => acc.concat(val), []);
}
