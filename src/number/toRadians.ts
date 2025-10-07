/**
 * Converts an angle from degrees to radians.
 *
 * @example
 * ```ts
 * toRadians(180);   // returns Math.PI
 * toRadians(90);    // returns Math.PI / 2
 * ```
 *
 * @param degrees - Angle in degrees.
 * @returns Angle in radians.
 * @throws Will throw an error if the input is not a finite number.
 *
 * @category Number
 * @since 1.1.0
 */
export function toRadians(degrees: number): number {
  if (!Number.isFinite(degrees))
    throw new Error("toRadians: degrees must be a finite number");
  return degrees * (Math.PI / 180);
}
