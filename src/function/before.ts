/**
 * Creates a function that invokes `fn` until it has been called `n - 1` times.
 *
 * The returned function will call `fn` for the first `n - 1` invocations.
 * After that, it always returns `undefined`.
 *
 * @template T - The type of the function to be invoked.
 * @param {number} n - The maximum number of times `fn` can be invoked plus one.
 * @param {T} fn - The function to invoke until the limit is reached.
 * @returns {(...args: Parameters<T>) => ReturnType<T> | undefined} A new function that stops invoking `fn` after `n - 1` calls.
 * @group Function
 * @since 1.2.0
 *
 * @example
 * const limited = before(3, () => console.log("Run"));
 * limited(); limited(); limited(); // logs "Run" twice
 */
export function before<T extends (...args: any[]) => any>(
  n: number,
  fn: T
): (...args: Parameters<T>) => ReturnType<T> | undefined {
  let remaining = n;
  return (...args: Parameters<T>): ReturnType<T> | undefined =>
    --remaining > 0 ? fn(...args) : undefined;
}
