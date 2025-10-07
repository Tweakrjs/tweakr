/**
 * Reverses the characters in a string.
 *
 * @param str - The string to reverse.
 * @returns The reversed string.
 *
 * @group String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * reverseString("hello"); // "olleh"
 * reverseString("12345"); // "54321"
 * ```
 */
export function reverseString(str: string): string {
  return str.split("").reverse().join("");
}
