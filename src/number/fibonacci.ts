const memoCache: Record<string, number> = {};
/**
 * Computes the `n`-th Fibonacci number using memoization.
 *
 * Memoization stores previously calculated Fibonacci numbers in an internal cache
 * to improve performance for repeated calls.
 *
 * @example
 * ```ts
 * fibonacci(0); // 0
 * fibonacci(1); // 1
 * fibonacci(5); // 5
 * fibonacci(10); // 55
 * ```
 *
 * @param n - The non-negative integer representing the position in the Fibonacci sequence.
 * @returns The `n`-th Fibonacci number.
 * @throws {Error} If `n` is negative.
 *
 * @group Number
 * @since 1.1.0
 */
export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Fibonacci not defined for negative numbers");
  if (n === 0) return 0;
  if (n === 1) return 1;

  if (memoCache[`fib_${n}`] !== undefined) return memoCache[`fib_${n}`];

  const result = fibonacci(n - 1) + fibonacci(n - 2);
  memoCache[`fib_${n}`] = result;
  return result;
}
