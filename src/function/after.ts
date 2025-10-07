/**
 * Creates a function that will invoke `fn` only after it has been called `n` times.
 *
 * @example
 * ```ts
 * const initAfter3 = after(3, () => console.log("Called after 3 invocations"));
 * initAfter3(); // nothing
 * initAfter3(); // nothing
 * initAfter3(); // logs: "Called after 3 invocations"
 * ```
 *
 * @param n - Number of calls before `fn` is invoked.
 * @param fn - The function to call after `n` invocations.
 * @returns A new function that tracks the call count.
 *
 * @category Function
 * @since 1.1.0
 */
export function after(n: number, fn: (...args: any[]) => any) {
  let count = 0;
  let called = false;
  return (...args: any[]) => {
    count++;
    if (count >= n && !called) {
      called = true;
      return fn(...args);
    }
    return undefined;
  };
}
