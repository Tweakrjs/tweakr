/**
 * Creates a throttled function that only invokes `fn` at most once
 * per `limit` milliseconds.
 *
 * @example
 * ```ts
 * const log = (msg: string) => console.log(msg);
 * const throttledLog = throttle(log, 1000);
 * window.addEventListener("scroll", () => throttledLog("scrolling"));
 * ```
 *
 * @param fn - The function to throttle.
 * @param limit - Minimum time in milliseconds between calls (default: 300ms).
 * @returns A throttled version of `fn`.
 *
 * @group Function
 * @since 1.1.0
 */
export function throttle<T extends (...args: any[]) => void>(
  fn: T,
  limit = 300
) {
  let inThrottle = false;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
