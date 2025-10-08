/**
 * Clamps a BigInt value between a minimum and maximum.
 *
 * @example
 * ```ts
 * clampBigInt(5n, 1n, 10n); // returns 5n
 * clampBigInt(0n, 1n, 10n); // returns 1n
 * clampBigInt(15n, 1n, 10n); // returns 10n
 * ```
 *
 * @param value - The BigInt value to clamp
 * @param min - Minimum allowed value
 * @param max - Maximum allowed value
 * @returns Clamped BigInt
 *
 * @group Number
 * @since 1.2.0
 */
export function clampBigInt(value: bigint, min: bigint, max: bigint): bigint {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}
