const fibCache: Record<number, bigint> = {
  0: 0n,
  1: 1n,
};

/**
 * Computes the `n`-th Fibonacci number using memoization and BigInt.
 *
 * Uses an internal cache to store results for improved performance.
 * Automatically switches to BigInt for large values.
 *
 * @example
 * fibonacci(10); // 55n
 * fibonacci(100n); // 354224848179261915075n
 *
 * @param n - The non-negative integer or bigint representing the position.
 * @returns The `n`-th Fibonacci number as a BigInt.
 * @throws {Error} If `n` is negative or not an integer.
 *
 * @group Number
 * @since 1.2.0
 */
export function fibonacci(n: number | bigint): bigint {
  const num = typeof n === "bigint" ? n : BigInt(n);
  if (num < 0n) throw new Error("Fibonacci not defined for negative numbers");
  if (fibCache[Number(num)] !== undefined) return fibCache[Number(num)];

  const result = fibonacci(num - 1n) + fibonacci(num - 2n);
  fibCache[Number(num)] = result;
  return result;
}
