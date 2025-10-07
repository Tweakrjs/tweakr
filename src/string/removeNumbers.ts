/**
 * Removes all numeric digits from a string.
 *
 * @example
 * ```ts
 * removeNumbers("abc123"); // "abc"
 * removeNumbers("2025 is the year"); // " is the year"
 * ```
 *
 * @param input - The string to process.
 * @returns The string without digits.
 *
 * @group String
 * @since 1.2.0
 */
export function removeNumbers(input: string): string {
  return input.replace(/\d+/g, "");
}
