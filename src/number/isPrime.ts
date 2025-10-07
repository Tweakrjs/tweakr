/**
 * Checks if a number is a prime number.
 *
 * @example
 * ```ts
 * isPrime(2);  // returns true
 * isPrime(4);  // returns false
 * isPrime(17); // returns true
 * ```
 *
 * @param n - The number to check.
 * @returns `true` if `n` is prime, otherwise `false`.
 *
 * @category Number
 * @since 1.1.0
 */
export function isPrime(n: number): boolean {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}
