/**
 * Checks if a string ends with the given suffix.
 *
 * @param str - The string to check.
 * @param suffix - The suffix to test.
 * @returns `true` if `str` ends with `suffix`, otherwise `false`.
 *
 * @group String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * endsWith("Hello World", "World"); // true
 * endsWith("Hello World", "world"); // false
 * endsWith("Hello", "");           // true
 * ```
 */
export function endsWith(str: string, suffix: string): boolean {
  if (suffix === "") return true;
  if (suffix.length > str.length) return false;

  const decodeHtmlWhitespace = (s: string) =>
    s
      .replace(/&nbsp;/gi, "\u00A0")
      .replace(/&emsp;/gi, "\u2003")
      .replace(/&ensp;/gi, "\u2002")
      .replace(/&thinsp;/gi, "\u2009");

  const normalizedStr = decodeHtmlWhitespace(str).normalize("NFC");
  const normalizedSuffix = decodeHtmlWhitespace(suffix).normalize("NFC");

  return normalizedStr.endsWith(normalizedSuffix);
}
