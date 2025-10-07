/**
 * Creates a rate-limited function that only invokes `fn` at most once
 * per specified `interval` in milliseconds.
 *
 * @example
 * ```ts
 * const log = (msg: string) => console.log(msg);
 * const limitedLog = rateLimit(log, 2000);
 * limitedLog("Hello"); // executes immediately
 * limitedLog("World"); // ignored if called within 2 seconds
 * ```
 *
 * @param fn - The function to rate-limit.
 * @param interval - Minimum time in milliseconds between calls (default: 1000ms).
 * @returns A rate-limited version of `fn`.
 *
 * @group Function
 * @since 1.1.0
 */
export function rateLimit(fn: Function, interval = 1000) {
  let last = 0;
  return (...args: any[]) => {
    const now = Date.now();
    if (now - last >= interval) {
      last = now;
      return fn(...args);
    }
  };
}
