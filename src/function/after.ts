/**
 * Creates a function that invokes `fn` only after it has been called `n` times.
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
