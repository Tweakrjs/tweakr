/**
 * Converts a value to its percentage of a total, rounding with precision safety.
 *
 * Automatically corrects for floating-point rounding errors and returns 0
 * when total is 0 or invalid.
 *
 * @example
 * ```ts
 * toPercentage(50, 200);      // 25
 * toPercentage(1, 3, 3);      // 33.333
 * toPercentage(0.1 + 0.2, 0.3); // 100
 * toPercentage(5, 0);         // 0
 * ```
 *
 * @param value - The part value.
 * @param total - The total value.
 * @param decimals - Number of decimal places (default: 2).
 * @returns The percentage as a number.
 *
 * @group Number
 * @since 1.2.0
 */
export function toPercentage(
  value: number,
  total: number,
  decimals = 2
): number {
  if (!Number.isFinite(value) || !Number.isFinite(total) || total === 0)
    return 0;

  const percentage = (value / total) * 100;
  const factor = 10 ** decimals;

  // EPSILON correction for floating precision
  return Math.round((percentage + Number.EPSILON) * factor) / factor;
}
