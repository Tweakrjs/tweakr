/**
 * Creates a new array with all falsey values removed.
 *
 * Falsey values include: `false`, `null`, `0`, `""`, `undefined`, and `NaN`.
 *
 * @example
 * ```ts
 * compact([0, 1, false, 2, "", 3]);
 * // → [1, 2, 3]
 * ```
 *
 * @param array - The array to filter.
 * @returns A new array with all falsey values removed.
 *
 * @category Array
 * @since 1.0.0
 */
export function compact<T>(array: T[]): T[] {
  return array.filter(Boolean);
}
