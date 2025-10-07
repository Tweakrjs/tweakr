/**
 * Removes the specified prefix from a string if it exists.
 *
 * @param str - The string to process.
 * @param prefix - The prefix to remove.
 * @returns The string without the prefix if it was present; otherwise, returns the original string.
 *
 * @group String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * removePrefix("unhappy", "un"); // "happy"
 * removePrefix("hello", "he");   // "llo"
 * removePrefix("world", "un");   // "world" (prefix not found)
 * ```
 */
export function removePrefix(str: string, prefix: string): string {
  if (str.slice(0, prefix.length) === prefix) {
    return str.slice(prefix.length);
  }
  return str;
}
