/**
 * Checks if a string starts with the given prefix.
 *
 * @param str - The string to check.
 * @param prefix - The prefix to match at the start of the string.
 * @returns `true` if the string starts with the prefix, otherwise `false`.
 *
 * @group String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * startsWith("hello world", "hello"); // true
 * startsWith("hello world", "world"); // false
 * startsWith("typescript", "ts"); // true
 * ```
 */
export function startsWith(str: string, prefix: string): boolean {
  // Handle empty prefix
  if (prefix === "") return true;

  // If prefix is longer than string, cannot match
  if (prefix.length > str.length) return false;

  // Decode HTML whitespace entities
  const decodeHtmlWhitespace = (s: string) =>
    s
      .replace(/&nbsp;/gi, "\u00A0")
      .replace(/&emsp;/gi, "\u2003")
      .replace(/&ensp;/gi, "\u2002")
      .replace(/&thinsp;/gi, "\u2009");

  const normalizedStr = decodeHtmlWhitespace(str).normalize("NFC");
  const normalizedPrefix = decodeHtmlWhitespace(prefix).normalize("NFC");

  // Use slice comparison instead of startsWith (more robust in some environments)
  return normalizedStr.slice(0, normalizedPrefix.length) === normalizedPrefix;
}
