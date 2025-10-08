/**
 * Curries a function with a fixed number of arguments (supports rest parameters).
 *
 * @example
 * const add = (a: number, b: number, c: number) => a + b + c;
 * const curried = curryN(3, add);
 * curried(1)(2)(3); // 6
 * curried(1, 2)(3); // 6
 *
 * @param n - Number of arguments to curry.
 * @param fn - Function to curry.
 * @returns Curried function that supports rest parameters.
 *
 * @group Function
 * @since 1.2.0
 */
export function curryN<T extends any[], R>(
  n: number,
  fn: (...args: T) => R
): (...args: any[]) => any {
  function curried(...argsSoFar: any[]): any {
    return (...nextArgs: any[]) => {
      const allArgs = [...argsSoFar, ...nextArgs];
      if (allArgs.length >= n) {
        return fn(...(allArgs as T));
      }
      return curried(...allArgs);
    };
  }
  return curried();
}
