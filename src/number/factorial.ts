const factCache: Record<number, bigint> = {
  0: 1n,
  1: 1n,
};

/**
 * Computes the factorial of a non-negative integer using memoization and BigInt.
 *
 * Results are cached for performance and returned as BigInt for large values.
 *
 * @example
 * factorial(5); // 120n
 * factorial(25n); // 15511210043330985984000000n
 *
 * @param n - The non-negative integer or bigint to compute the factorial of.
 * @returns The factorial of `n` as a BigInt.
 * @throws {Error} If `n` is negative or not an integer.
 *
 * @group Number
 * @since 1.2.0
 */
export function factorial(n: number | bigint): bigint {
  const num = typeof n === "bigint" ? n : BigInt(n);
  if (num < 0n) throw new Error("Factorial not defined for negative numbers");
  if (factCache[Number(num)] !== undefined) return factCache[Number(num)];

  const result = num * factorial(num - 1n);
  factCache[Number(num)] = result;
  return result;
}
