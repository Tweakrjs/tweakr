/**
 * Generates a random float between min and max.
 *
 * @example
 * ```ts
 * randomFloat(0, 1); // returns a float between 0 and 1
 * randomFloat(1.5, 2.5); // returns a float between 1.5 and 2.5
 * ```
 *
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns Random float
 *
 * @group Number
 * @since 1.2.0
 */
export function randomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
