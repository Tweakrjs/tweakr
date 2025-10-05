export function initial<T>(array: T[]): T[] {
  return array.slice(0, -1);
}
