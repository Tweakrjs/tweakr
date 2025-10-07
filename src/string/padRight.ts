/**
 * Pads a string on the right to reach the specified length.
 *
 * @param str - The string to pad.
 * @param length - The desired total length of the string after padding.
 * @param char - The character to use for padding. Defaults to a space.
 * @returns The padded string.
 *
 * @category String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * padRight("5", 3); // "5  "
 * padRight("42", 5, "0"); // "42000"
 * ```
 */
export function padRight(str: string, length: number, char = " "): string {
  str = String(str);
  if (str.length >= length) return str;
  return str + char.repeat(length - str.length);
}
