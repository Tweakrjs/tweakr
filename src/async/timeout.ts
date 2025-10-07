/**
 * Wraps a promise with a timeout. If the promise does not settle
 * within the specified time, it rejects with a `Timeout` error.
 *
 * @example
 * ```ts
 * const result = await timeout(
 *   new Promise(res => setTimeout(() => res("Done"), 2000)),
 *   1000
 * ).catch(err => err.message);
 *
 * console.log(result); // "Timeout"
 * ```
 *
 * @template T - The type of the promise's resolved value.
 * @param promise - The promise to wrap with a timeout.
 * @param ms - Timeout duration in milliseconds.
 * @param message - Optional timeout error message (default: "Timeout").
 * @returns A promise that resolves or rejects like the original promise, or rejects on timeout.
 *
 * @group Async
 * @since 1.1.0
 */
export function timeout<T>(
  promise: Promise<T>,
  ms: number,
  message = "Timeout"
) {
  let timer: NodeJS.Timeout;
  return Promise.race([
    promise.finally(() => clearTimeout(timer)),
    new Promise<T>(
      (_, reject) => (timer = setTimeout(() => reject(new Error(message)), ms))
    ),
  ]);
}
