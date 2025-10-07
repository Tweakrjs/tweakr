/**
 * Creates a function that invokes `fn` until it has been called `n - 1` times.
 *
 * After `n - 1` calls, it returns `undefined` on subsequent calls.
 *
 * @example
 * ```ts
 * const logBefore3 = before(3, () => console.log("Called"));
 * logBefore3(); // logs "Called"
 * logBefore3(); // logs "Called"
 * logBefore3(); // does nothing
 * ```
 *
 * @param n - Number of calls before stopping invocation.
 * @param fn - The function to invoke.
 * @returns A new function that calls `fn` until the call limit is reached.
 *
 * @group Function
 * @since 1.1.0
 */
export function before(n: number, fn: (...args: any[]) => any) {
  let count = 0;
  return (...args: any[]) => (++count < n ? fn(...args) : undefined);
}
