/**
 * Removes all whitespace characters from a string, including
 * normal, Unicode, zero-width spaces, and HTML entities.
 *
 * @param str - The input string.
 * @returns The string with all whitespace removed.
 *
 * @group String
 * @since 1.2.0
 *
 * @example
 * ```ts
 * trimAll("  hello   world  "); // "helloworld"
 * trimAll(" a&nbsp;b&nbsp;c "); // "abc"
 * trimAll("\u200Bfoo\u00A0bar"); // "foobar"
 * ```
 */
export function trimAll(str: string): string {
  if (!str) return "";

  // Decode basic HTML entities (common whitespace ones)
  const htmlDecoded = str
    .replace(/&nbsp;/gi, "\u00A0")
    .replace(/&emsp;/gi, "\u2003")
    .replace(/&ensp;/gi, "\u2002")
    .replace(/&thinsp;/gi, "\u2009");

  // Regex to remove all Unicode whitespace, zero-width, non-breaking
  const UNICODE_WHITESPACE =
    /[\s\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000\u200B]/g;

  return htmlDecoded.replace(UNICODE_WHITESPACE, "");
}
