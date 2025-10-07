/**
 * Memoizes a function with multiple arguments.
 *
 * @example
 * const fn = (a: number, b: number) => a + b;
 * const memo = memoizeN(fn);
 * memo(1,2); // 3, cached
 *
 * @param fn - Function to memoize.
 * @returns Memoized function.
 *
 * @group Function
 * @since 1.2.0
 */
export function memoizeN<F extends (...args: any[]) => any>(fn: F): F {
  const cache = new Map<string, ReturnType<F>>();
  return ((...args: any[]) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as F;
}
