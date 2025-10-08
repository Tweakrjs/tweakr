/**
 * Rounds a number to a fixed number of decimal places using precision-safe math.
 *
 * Handles floating-point rounding issues for both positive and negative values
 * (e.g., 1.005 → 1.01, -1.235 → -1.24).
 *
 * @param {number} value - The number to round.
 * @param {number} [decimals=2] - The number of decimal places to round to.
 * @returns {number} The rounded number.
 * @group Number
 * @since 1.2.0
 *
 * @example
 * toFixedNumber(1.005, 2);   // 1.01
 * toFixedNumber(-1.235, 2);  // -1.24
 */
export function toFixedNumber(value: number, decimals = 2): number {
  if (!Number.isFinite(value)) return value;

  const factor = 10 ** decimals;
  const adjusted = value + Math.sign(value) * Number.EPSILON;
  return Math.round(adjusted * factor) / factor;
}
