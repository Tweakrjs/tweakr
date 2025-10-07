/**
 * Truncates a string to a specified number of words.
 *
 * @example
 * ```ts
 * truncateWords("The quick brown fox", 2); // "The quick"
 * truncateWords("Hello world!", 5); // "Hello world!"
 * ```
 *
 * @param input - The string to truncate.
 * @param wordLimit - Maximum number of words to keep.
 * @returns The truncated string.
 *
 * @group String
 * @since 1.2.0
 */
export function truncateWords(input: string, wordLimit: number): string {
  return input.split(/\s+/).slice(0, wordLimit).join(" ");
}
