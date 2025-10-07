/**
 * Recursively wraps a function with a wrapper function at all levels.
 *
 * @example
 * const fn = (x: number) => x + 1;
 * const wrapped = wrapDeep(fn, f => (...args) => f(...args) * 2);
 * wrapped(2); // 6
 *
 * @param fn - Function to wrap.
 * @param wrapper - Wrapper function.
 * @returns A new wrapped function.
 *
 * @group Function
 * @since 1.2.0
 */
export function wrapDeep<F extends (...args: any[]) => any>(
  fn: F,
  wrapper: (fn: F) => F
): F {
  return wrapper(fn);
}
