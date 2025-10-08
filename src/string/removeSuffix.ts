/**
 * Removes the specified suffix from a string if it exists.
 *
 * @param str - The string to process.
 * @param suffix - The suffix to remove.
 * @returns The string without the suffix if it was present; otherwise, returns the original string.
 *
 * @group String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * removeSuffix("running", "ing"); // "runn"
 * removeSuffix("hello", "lo");    // "hel"
 * removeSuffix("world", "ing");   // "world" (suffix not found)
 * ```
 */
export function removeSuffix(
  str: string,
  suffix: string,
  options?: { caseInsensitive?: boolean }
): string {
  if (!suffix) return str;

  const normalizedStr = str.normalize();
  const normalizedSuffix = suffix.normalize();

  if (options?.caseInsensitive) {
    if (
      normalizedStr.slice(-normalizedSuffix.length).toLowerCase() ===
      normalizedSuffix.toLowerCase()
    ) {
      return str.slice(0, -suffix.length);
    }
  } else {
    if (normalizedStr.endsWith(normalizedSuffix)) {
      return str.slice(0, -suffix.length);
    }
  }

  return str;
}
