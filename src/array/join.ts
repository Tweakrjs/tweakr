/**
 * Joins all elements of an array into a string, separated by the specified separator.
 *
 * @example
 * ```ts
 * join([1, 2, 3], "-");
 * // → "1-2-3"
 *
 * join(["a", "b", "c"]);
 * // → "a,b,c"
 * ```
 *
 * @param array - The array of elements to join.
 * @param separator - The string to separate each element. Defaults to a comma (",").
 * @returns A string with all array elements joined by the separator.
 *
 * @category Array
 * @since 1.0.0
 */
export function join<T>(array: T[], separator = ","): string {
  return array.join(separator);
}
