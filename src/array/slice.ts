/**
 * Creates a shallow copy of a portion of an array from `start` up to, but not including, `end`.
 *
 * @example
 * ```ts
 * slice([1, 2, 3, 4], 1, 3);
 * // → [2, 3]
 *
 * slice(["a", "b", "c"]);
 * // → ["a", "b", "c"]
 * ```
 *
 * @param array - The array to slice.
 * @param start - The index to start extraction. Defaults to `0`.
 * @param end - The index before which to end extraction. If omitted, extracts through the end of the array.
 * @returns A new array containing the extracted elements.
 *
 * @category Array
 * @since 1.0.0
 */
export function slice<T>(array: T[], start = 0, end?: number): T[] {
  return array.slice(start, end);
}
