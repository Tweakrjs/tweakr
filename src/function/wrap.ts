/**
 * Wraps a function with a wrapper function, allowing pre- or post-processing.
 *
 * @example
 * ```ts
 * const logWrapper = wrap(
 *   (x: number) => x * 2,
 *   (fn, x) => {
 *     console.log("Input:", x);
 *     const result = fn(x);
 *     console.log("Output:", result);
 *     return result;
 *   }
 * );
 * logWrapper(5);
 * // Logs: "Input: 5" then "Output: 10"
 * ```
 *
 * @param fn - The original function to wrap.
 * @param wrapper - A function that receives the original function and arguments, can modify behavior or result.
 * @returns A new function wrapped with the provided wrapper.
 *
 * @category Function
 * @since 1.1.0
 */
export function wrap<T extends (...args: any[]) => any>(
  fn: T,
  wrapper: (fn: T, ...args: Parameters<T>) => ReturnType<T>
) {
  return (...args: Parameters<T>) => wrapper(fn, ...args);
}
