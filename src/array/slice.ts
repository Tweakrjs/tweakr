export function slice<T>(array: T[], start = 0, end?: number): T[] {
  return array.slice(start, end);
}
