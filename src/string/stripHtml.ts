/**
 * Removes HTML tags from a string.
 *
 * @param str - The input string containing HTML.
 * @returns A new string with all HTML tags removed.
 *
 * @category String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * stripHtml("<p>Hello <strong>world</strong>!</p>"); // "Hello world!"
 * stripHtml("<a href='#'>Link</a>"); // "Link"
 * ```
 */
export function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, "");
}
