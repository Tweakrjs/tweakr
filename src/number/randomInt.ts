/**
 * Generates a random integer between min and max (inclusive).
 *
 * @example
 * ```ts
 * randomInt(1, 5); // returns an integer between 1 and 5
 * randomInt(0, 0); // returns 0
 * ```
 *
 * @param min - Minimum integer value (inclusive)
 * @param max - Maximum integer value (inclusive)
 * @returns Random integer
 *
 * @group Number
 * @since 1.2.0
 */
export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
