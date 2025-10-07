/**
 * Defers the execution of a function until the next microtask.
 *
 * @example
 * ```ts
 * defer(() => console.log("Executed after current call stack"));
 * console.log("Executed first");
 * // Output:
 * // Executed first
 * // Executed after current call stack
 * ```
 *
 * @param fn - The function to defer.
 *
 * @group Function
 * @since 1.1.0
 */
export function defer(fn: Function) {
  Promise.resolve().then(() => fn());
}
