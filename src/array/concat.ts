export function concat<T>(...arrays: (T | T[])[]): T[] {
  return ([] as T[]).concat(...arrays);
}
