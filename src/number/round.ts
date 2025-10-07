/**
 * Rounds a number to a specified number of decimal places.
 *
 * @example
 * ```ts
 * round(3.14159);      // returns 3
 * round(3.14159, 2);   // returns 3.14
 * round(1.005, 2);     // returns 1.01
 * ```
 *
 * @param value - The number to round.
 * @param decimals - Number of decimal places (default `0`).
 * @returns The rounded number.
 *
 * @category Number
 * @since 1.1.0
 */
export function round(value: number, decimals = 0): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}
