/**
 * Returns the number of decimal places in a number, accounting for exponential notation.
 *
 * @example
 * ```ts
 * decimalPlaces(12.345);      // returns 3
 * decimalPlaces(1.23e-4);     // returns 6
 * decimalPlaces(100);         // returns 0
 * decimalPlaces(1.2345e2);    // returns 2
 * ```
 *
 * @param value - The number to analyze.
 * @returns The count of decimal places.
 *
 * @group Number
 * @since 1.1.0
 */
export function decimalPlaces(value: number): number {
  const match = value.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  if (!match) return 0;
  const decimals = match[1] ? match[1].length : 0;
  const exponent = match[2] ? parseInt(match[2]) : 0;
  return Math.max(0, decimals - exponent);
}
