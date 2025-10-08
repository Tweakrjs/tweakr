/**
 * Converts an angle from degrees to radians.
 *
 * @example
 * ```ts
 * toRadians(180); // Math.PI
 * toRadians(90);  // Math.PI / 2
 * ```
 *
 * @param degrees - Angle in degrees (finite number).
 * @returns Equivalent angle in radians.
 * @throws {TypeError} If the input is not a finite number.
 *
 * @group Number
 * @since 1.2.0
 */
export function toRadians(degrees: number): number {
  if (!Number.isFinite(degrees)) {
    throw new TypeError("toRadians: degrees must be a finite number");
  }
  return degrees * (Math.PI / 180);
}
