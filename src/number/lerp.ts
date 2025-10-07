/**
 * Linearly interpolates between two numbers.
 *
 * @example
 * ```ts
 * lerp(0, 10, 0.5); // returns 5
 * lerp(5, 15, 0);   // returns 5
 * lerp(5, 15, 1);   // returns 15
 * ```
 *
 * @param start - The start value.
 * @param end - The end value.
 * @param t - Interpolation factor (0 → start, 1 → end).
 * @returns The interpolated value.
 * @throws Will throw an error if any argument is not a finite number.
 *
 * @group Number
 * @since 1.1.0
 */
export function lerp(start: number, end: number, t: number): number {
  if (!Number.isFinite(start) || !Number.isFinite(end) || !Number.isFinite(t)) {
    throw new Error("lerp: all arguments must be finite numbers");
  }
  return start + t * (end - start);
}
