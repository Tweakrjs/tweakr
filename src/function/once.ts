/**
 * Creates a function that is invoked at most once.
 * Subsequent calls return the result of the first invocation.
 *
 * @example
 * const init = once(() => console.log("Initialized"));
 * init(); // "Initialized"
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
