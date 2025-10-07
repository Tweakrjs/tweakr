/**
 * Removes diacritical marks (accents) from a string.
 *
 * @param str - The input string.
 * @returns A new string with all accents removed.
 *
 * @category String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * stripAccents("café"); // "cafe"
 * stripAccents("fiancée"); // "fiancee"
 * stripAccents("über"); // "uber"
 * ```
 */
export function stripAccents(str: string): string {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
