export function dropRight<T>(array: T[], n = 1): T[] {
  return array.slice(0, -n || array.length);
}
