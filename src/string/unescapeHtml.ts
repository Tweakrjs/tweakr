const UNESC_MAP: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
};
/**
 * Converts HTML entities back into their corresponding characters.
 *
 * @param str - The HTML-encoded string to decode.
 * @returns The decoded string with HTML entities replaced by their characters.
 *
 * @group String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * unescapeHtml("&lt;div&gt;Hello &amp; World&lt;/div&gt;");
 * // "<div>Hello & World</div>"
 * ```
 */
export function unescapeHtml(str: string): string {
  return str.replace(/&(amp|lt|gt|quot|#39);/g, (m) => UNESC_MAP[m]);
}
