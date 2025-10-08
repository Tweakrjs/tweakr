/**
 * Creates a function that is invoked at most once.
 * Subsequent calls return the result of the first invocation.
 *
 * The returned function caches the result of the first call to `fn`
 * and always returns that same result on subsequent calls.
 *
 * @template T - The type of the function to be invoked.
 * @param {T} fn - The function to invoke at most once.
 * @returns {(...args: Parameters<T>) => ReturnType<T>} A new function that calls `fn` only once.
 * @group Function
 * @since 1.2.0
 *
 * @example
 * const init = once(() => console.log("Initialized"));
 * init(); // logs "Initialized"
 * init(); // does nothing
 */
export function once<T extends (...args: any[]) => any>(
  fn: T
): (...args: Parameters<T>) => ReturnType<T> {
  let called = false;
  let result: ReturnType<T>;
  return function (
    this: ThisParameterType<T>,
    ...args: Parameters<T>
  ): ReturnType<T> {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}
