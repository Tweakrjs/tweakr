/**
 * Curries a function of N arguments.
 *
 * @example
 * const add = (a: number, b: number) => a + b;
 * const curried = curryN(2, add);
 * curried(1)(2); // 3
 *
 * @param n - Number of arguments to curry.
 * @param fn - Function to curry.
 * @returns Curried function.
 *
 * @group Function
 * @since 1.2.0
 */
export function curryN<T extends any[], R>(
  n: number,
  fn: (...args: T) => R
): (...args: Partial<T>) => any {
  function curried(argsSoFar: any[]): any {
    return (...nextArgs: any[]) => {
      const allArgs = [...argsSoFar, ...nextArgs];
      if (allArgs.length >= n) {
        return fn(...(allArgs as T));
      } else {
        return curried(allArgs);
      }
    };
  }
  return curried([]);
}
