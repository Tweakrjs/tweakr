/**
 * Computes the `n`-th Fibonacci number using memoization.
 *
 * @example
 * ```ts
 * fibonacci(0); // returns 0
 * fibonacci(1); // returns 1
 * fibonacci(5); // returns 5
 * fibonacci(10); // returns 55
 * ```
 *
 * @param n - Non-negative integer representing the position in the Fibonacci sequence.
 * @returns The `n`-th Fibonacci number.
 * @throws Will throw an error if `n` is negative.
 *
 * @category Number
 * @since 1.1.0
 */
const memoCache: Record<string, number> = {};

export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Fibonacci not defined for negative numbers");
  if (n === 0) return 0;
  if (n === 1) return 1;

  if (memoCache[`fib_${n}`] !== undefined) return memoCache[`fib_${n}`];

  const result = fibonacci(n - 1) + fibonacci(n - 2);
  memoCache[`fib_${n}`] = result;
  return result;
}
