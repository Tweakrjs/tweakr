export function unary<T extends (...args: any[]) => any>(fn: T) {
  return (arg: Parameters<T>[0]) => fn(arg);
}
