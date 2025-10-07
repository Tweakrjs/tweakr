/**
 * Creates a function that is invoked at most once.
 *
 * Subsequent calls return the result of the first invocation.
 *
 * @example
 * ```ts
 * const init = once(() => console.log("Initialized"));
 * init(); // logs "Initialized"
 * init(); // does nothing
 * ```
 *
 * @param fn - The function to invoke once.
 * @returns A new function that can only be called once.
 *
 * @group Function
 * @since 1.1.0
 */
export function once<T extends (...args: any[]) => any>(fn: T) {
  let called = false;
  let result: any;
  return (...args: Parameters<T>): ReturnType<T> => {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}
