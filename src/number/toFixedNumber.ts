/**
 * Rounds a number to a fixed number of decimal places and returns it as a number.
 *
 * @example
 * ```ts
 * toFixedNumber(3.14159);      // returns 3.14
 * toFixedNumber(1.005, 3);     // returns 1.005
 * toFixedNumber(NaN);          // returns NaN
 * ```
 *
 * @param value - The number to round.
 * @param decimals - Number of decimal places (default `2`).
 * @returns The rounded number.
 *
 * @category Number
 * @since 1.1.0
 */
export function toFixedNumber(value: number, decimals = 2): number {
  if (!Number.isFinite(value)) return value; // preserve NaN/Infinity
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
