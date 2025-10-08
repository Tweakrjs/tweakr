/**
 * Creates a function that invokes `fn` only after it has been called `n` times.
 *
 * The returned function will call `fn` after the specified number of invocations.
 * Until then, it returns `undefined`. After the first successful call, the result
 * of `fn` is cached and returned on subsequent calls.
 *
 * @template T - The type of the function to be invoked.
 * @param {number} n - The number of calls required before invoking `fn`.
 * @param {T} fn - The function to invoke after `n` calls.
 * @returns {(...args: Parameters<T>) => ReturnType<T> | undefined} A new function that waits for `n` calls.
 * @group Function
 * @since 1.2.0
 *
 * @example
 * const ready = after(3, () => console.log("Ready!"));
 * ready(); ready(); ready(); // logs "Ready!"
 */
export function after<T extends (...args: any[]) => any>(
  n: number,
  fn: T
): (...args: Parameters<T>) => ReturnType<T> | undefined {
  let remaining = n;
  let result: ReturnType<T> | undefined;
  return (...args: Parameters<T>): ReturnType<T> | undefined => {
    if (--remaining <= 0) {
      if (result === undefined) result = fn(...args);
      return result;
    }
    return undefined;
  };
}
