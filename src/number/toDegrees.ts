/**
 * Converts an angle from radians to degrees.
 *
 * @example
 * ```ts
 * toDegrees(Math.PI);   // 180
 * toDegrees(Math.PI / 2); // 90
 * ```
 *
 * @param radians - Angle in radians (finite number).
 * @returns Equivalent angle in degrees.
 * @throws {TypeError} If the input is not a finite number.
 *
 * @group Number
 * @since 1.2.0
 */
export function toDegrees(radians: number): number {
  if (!Number.isFinite(radians)) {
    throw new TypeError("toDegrees: radians must be a finite number");
  }
  return radians * (180 / Math.PI);
}
