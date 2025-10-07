/**
 * Removes all whitespace characters from a string.
 *
 * @param str - The input string.
 * @returns A new string with all spaces, tabs, and line breaks removed.
 *
 * @group String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * stripWhitespace("  Hello  World \n "); // "HelloWorld"
 * stripWhitespace(" a b c "); // "abc"
 * ```
 */
export function stripWhitespace(str: string): string {
  return str.replace(/\s+/g, "");
}
