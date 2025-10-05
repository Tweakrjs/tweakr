export function fill<T>(
  array: T[],
  value: T,
  start = 0,
  end = array.length
): T[] {
  const result = array.slice();
  return result.fill(value, start, end);
}
