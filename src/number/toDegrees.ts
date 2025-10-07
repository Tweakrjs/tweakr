/**
 * Converts an angle from radians to degrees.
 *
 * @example
 * ```ts
 * toDegrees(Math.PI);   // returns 180
 * toDegrees(Math.PI/2); // returns 90
 * ```
 *
 * @param radians - Angle in radians.
 * @returns Angle in degrees.
 * @throws Will throw an error if the input is not a finite number.
 *
 * @group Number
 * @since 1.1.0
 */
export function toDegrees(radians: number): number {
  if (!Number.isFinite(radians))
    throw new Error("toDegrees: radians must be a finite number");
  return radians * (180 / Math.PI);
}
