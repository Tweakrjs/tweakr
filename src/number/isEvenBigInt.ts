/**
 * Checks if a BigInt number is even.
 *
 * @example
 * ```ts
 * isEvenBigInt(2n); // returns true
 * isEvenBigInt(3n); // returns false
 * ```
 *
 * @param n - BigInt number
 * @returns True if even, false if odd
 *
 * @group Number
 * @since 1.2.0
 */
export function isEvenBigInt(n: bigint): boolean {
  return n % 2n === 0n;
}
