/**
 * Collapses multiple consecutive whitespace characters in a string into a single space
 * and trims leading and trailing whitespace.
 *
 * @param str - The input string.
 * @returns The normalized string with collapsed whitespace.
 *
 * @group String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * collapseWhitespace("  Hello   World  "); // "Hello World"
 * collapseWhitespace("Line\nBreak\tTest"); // "Line Break Test"
 * ```
 */
export function collapseWhitespace(str: string): string {
  return str.replace(/\s+/g, " ").trim();
}
