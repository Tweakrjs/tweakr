export function wrap<T extends (...args: any[]) => any>(
  fn: T,
  wrapper: (fn: T, ...args: Parameters<T>) => ReturnType<T>
) {
  return (...args: Parameters<T>) => wrapper(fn, ...args);
}
