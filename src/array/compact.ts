export function compact<T>(array: T[]): T[] {
  return array.filter(Boolean);
}
