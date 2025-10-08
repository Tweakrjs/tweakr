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
export function removePrefix(
  str: string,
  prefix: string,
  options?: { caseInsensitive?: boolean }
): string {
  if (!prefix) return str;

  const normalizedStr = str.normalize();
  const normalizedPrefix = prefix.normalize();

  if (options?.caseInsensitive) {
    if (
      normalizedStr.toLowerCase().startsWith(normalizedPrefix.toLowerCase())
    ) {
      return str.slice(prefix.length);
    }
  } else {
    if (normalizedStr.startsWith(normalizedPrefix)) {
      return str.slice(prefix.length);
    }
  }

  return str;
}
