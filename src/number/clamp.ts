/**
 * Clamps a number within the inclusive range specified by `min` and `max`.
 *
 * @example
 * ```ts
 * clamp(10, 0, 5); // returns 5
 * clamp(-2, 0, 5); // returns 0
 * clamp(3, 0, 5);  // returns 3
 * ```
 *
 * @param value - The number to clamp.
 * @param min - Minimum allowed value.
 * @param max - Maximum allowed value.
 * @returns The clamped number within `[min, max]`.
 *
 * @group Number
 * @since 1.1.0
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
