/**
 * Yields execution to the next microtask, allowing pending promises
 * or other asynchronous operations to run before continuing.
 *
 * @example
 * ```ts
 * console.log("Start");
 * await yieldToNext();
 * console.log("Next tick");
 * ```
 *
 * @returns A Promise that resolves on the next microtask.
 *
 * @group Function
 * @since 1.1.0
 */
export function yieldToNext() {
  return Promise.resolve();
}
