const ESC_MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};
/**
 * Escapes special HTML characters in a string to their corresponding HTML entities.
 *
 * Characters escaped: `&`, `<`, `>`, `"`, `'`.
 *
 * @param str - The string to escape.
 * @returns The escaped string safe for HTML usage.
 *
 * @category String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * escapeHtml('<div class="test">Hello & Welcome</div>');
 * // Returns: '&lt;div class=&quot;test&quot;&gt;Hello &amp; Welcome&lt;/div&gt;'
 * ```
 */
export function escapeHtml(str: string): string {
  return str.replace(/[&<>"']/g, (char) => ESC_MAP[char]);
}
