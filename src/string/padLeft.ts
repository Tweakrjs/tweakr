/**
 * Pads a string on the left to reach the specified length.
 *
 * @param str - The string to pad.
 * @param length - The desired total length of the string after padding.
 * @param char - The character to use for padding. Defaults to a space.
 * @returns The padded string.
 *
 * @group String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * padLeft("5", 3); // "  5"
 * padLeft("42", 5, "0"); // "00042"
 * ```
 */
export function padLeft(str: string, length: number, char = " "): string {
  str = String(str);
  if (str.length >= length) return str;
  return char.repeat(length - str.length) + str;
}
