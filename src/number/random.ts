/**
 * Generates a random number between `min` and `max`.
 *
 * @example
 * ```ts
 * random(0, 1);        // returns a float between 0 and 1
 * random(1, 10, true); // returns an integer between 1 and 10
 * ```
 *
 * @param min - Minimum value (inclusive).
 * @param max - Maximum value (exclusive if float, inclusive if integer).
 * @param integer - Whether to return an integer (default `false`).
 * @returns A random number within the specified range.
 *
 * @category Number
 * @since 1.1.0
 */
export function random(min: number, max: number, integer = false): number {
  const value = Math.random() * (max - min) + min;
  return integer ? Math.floor(value) : value;
}
