/**
 * Reverses the order of words in a string.
 * Handles multiple spaces and preserves punctuation placement.
 *
 * @example
 * ```ts
 * reverseWordsAdvanced("Hello world!"); // "world! Hello"
 * reverseWordsAdvanced("  One   two  three "); // "three two One"
 * ```
 *
 * @param input - The string to reverse.
 * @returns The string with words reversed.
 *
 * @group String
 * @since 1.2.0
 */
export function reverseWordsAdvanced(input: string): string {
  return input.trim().split(/\s+/).reverse().join(" ");
}
