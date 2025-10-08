/**
 * Creates a function that invokes `fn` until it has been called `n - 1` times.
 *
 * @example
 * const limited = before(3, () => console.log("Run"));
 * limited(); limited(); limited(); // logs twice
 */
export function before<T extends (...args: any[]) => any>(
  n: number,
  fn: T
): (...args: Parameters<T>) => ReturnType<T> | undefined {
  let remaining = n;
  return (...args: Parameters<T>): ReturnType<T> | undefined =>
    --remaining > 0 ? fn(...args) : undefined;
}
