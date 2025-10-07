/**
 * Ensures an asynchronous function is executed only once.
 *
 * Subsequent calls return the same resolved or pending promise
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
 * @returns A new function that runs `fn` once and caches the result.
 *
 * @category Async
 * @since 1.0.0
 */
export function onceAsync<T extends (...args: any[]) => Promise<any>>(fn: T) {
  let result: Promise<ReturnType<T>> | null = null;
  return (...args: Parameters<T>): Promise<ReturnType<T>> => {
    if (!result) result = fn(...args);
    return result;
  };
}
