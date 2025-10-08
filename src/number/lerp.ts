/**
 * Linearly interpolates between two finite numbers.
 *
 * @example
 * ```ts
 * lerp(0, 10, 0.5); // 5
 * lerp(5, 15, 0);   // 5
 * lerp(5, 15, 1);   // 15
 * ```
 *
 * @param start - Start value.
 * @param end - End value.
 * @param t - Interpolation factor (typically between 0 and 1).
 * @returns Interpolated number between `start` and `end`.
 * @throws {TypeError} If any argument is not a finite number.
 *
 * @group Number
 * @since 1.2.0
 */
export function lerp(start: number, end: number, t: number): number {
  if (!Number.isFinite(start) || !Number.isFinite(end) || !Number.isFinite(t)) {
    throw new TypeError("lerp: all arguments must be finite numbers");
  }
  return start + t * (end - start);
}
