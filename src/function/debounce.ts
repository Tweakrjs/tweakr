/**
 * Creates a debounced version of a function that delays invoking `fn`
 * until after `delay` milliseconds have elapsed since the last call.
 *
 * @example
 * ```ts
 * const log = (msg: string) => console.log(msg);
 * const debouncedLog = debounce(log, 200);
 * debouncedLog("Hello"); // will run 200ms after the last call
 * ```
 *
 * @param fn - The function to debounce.
 * @param delay - The number of milliseconds to delay (default: 300ms).
 * @returns A debounced function.
 *
 * @group Function
 * @since 1.1.0
 */
export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay = 300
) {
  let timer: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
