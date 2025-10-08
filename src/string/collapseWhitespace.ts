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
  if (!str) return "";

  // Decode common HTML whitespace entities
  const htmlDecoded = str
    .replace(/&nbsp;/gi, "\u00A0")
    .replace(/&emsp;/gi, "\u2003")
    .replace(/&ensp;/gi, "\u2002")
    .replace(/&thinsp;/gi, "\u2009");

  // Collapse all consecutive Unicode whitespace and zero-width spaces to single space
  const UNICODE_WHITESPACE =
    /[\s\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000\u200B]+/g;

  return htmlDecoded.replace(UNICODE_WHITESPACE, " ").trim();
}
