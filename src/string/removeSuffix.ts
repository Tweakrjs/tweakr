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
export function removeSuffix(str: string, suffix: string): string {
  if (str.slice(-suffix.length) === suffix) {
    return str.slice(0, -suffix.length);
  }
  return str;
}
