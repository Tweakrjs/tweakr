/**
 * Ensures an asynchronous function is executed only once.
 *
 * Subsequent calls return the same pending or resolved promise
 * from the first invocation.
 *
 * @example
 * ```ts
 * const init = onceAsync(async () => {
 *   console.log("Initializing...");
 *   await new Promise(r => setTimeout(r, 1000));
 *   return "ready";
 * });
 *
 * await init(); // Logs "Initializing..."
 * await init(); // Returns cached promise, no log
 * ```
 *
 * @typeParam T - The async function type.
 * @param fn - The asynchronous function to execute only once.
 * @returns A wrapped function that runs `fn` once and caches the promise.
 *
 * @group Async
 * @since 1.2.0
 */
export function onceAsync<T extends (...args: any[]) => Promise<unknown>>(
  fn: T
) {
  let promise: Promise<Awaited<ReturnType<T>>> | null = null;

  return function (
    this: ThisParameterType<T>,
    ...args: Parameters<T>
  ): Promise<Awaited<ReturnType<T>>> {
    // Lazily create the cached promise
    if (!promise) {
      // Preserve `this` context and ensure consistent return type
      promise = Promise.resolve(fn.apply(this, args)) as Promise<
        Awaited<ReturnType<T>>
      >;
    }
    return promise;
  };
}
