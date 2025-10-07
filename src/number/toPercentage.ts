/**
 * Converts a value to a percentage of a total, rounded to a specified number of decimals.
 *
 * @example
 * ```ts
 * toPercentage(50, 200);       // returns 25
 * toPercentage(1, 3, 3);       // returns 33.333
 * toPercentage(5, 0);          // returns 0
 * ```
 *
 * @param value - The part value.
 * @param total - The total value.
 * @param decimals - Number of decimal places (default `2`).
 * @returns The percentage representation of `value` relative to `total`.
 *
 * @group Number
 * @since 1.1.0
 */
export function toPercentage(
  value: number,
  total: number,
  decimals = 2
): number {
  if (total === 0) return 0;
  const factor = 10 ** decimals;
  const percentage = (value / total) * 100;
  return Math.round(percentage * factor) / factor;
}
