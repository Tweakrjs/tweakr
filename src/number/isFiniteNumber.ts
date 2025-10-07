/**
 * Checks if a value is a finite number.
 *
 * @example
 * ```ts
 * isFiniteNumber(10); // returns true
 * isFiniteNumber(Infinity); // returns false
 * isFiniteNumber("10"); // returns false
 * ```
 *
 * @param n - The value to check.
 * @returns `true` if `n` is a finite number, otherwise `false`.
 *
 * @group Number
 * @since 1.1.0
 */
export function isFiniteNumber(n: unknown): n is number {
  return typeof n === "number" && isFinite(n);
}
