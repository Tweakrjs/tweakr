/**
 * Truncates a string to a maximum length and appends a suffix if needed.
 *
 * @param str - The string to truncate.
 * @param max - The maximum length of the resulting string including the suffix.
 * @param suffix - The string to append if truncation occurs (default: "…").
 * @returns The truncated string with suffix if truncated.
 *
 * @category String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * truncate("Hello World", 5); // "He…"
 * truncate("Hello", 10); // "Hello"
 * truncate("Hello", 2); // "…"
 * ```
 */
export function truncate(str: string, max: number, suffix = "…"): string {
  if (max <= 0) return ""; // max is zero or negative
  if (str.length <= max) return str;
  if (max <= suffix.length) return suffix.slice(0, max); // max too small for text, show partial suffix
  return str.slice(0, max - suffix.length) + suffix;
}
