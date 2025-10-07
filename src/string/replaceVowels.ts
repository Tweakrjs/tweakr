/**
 * Replaces all vowels in a string with the specified replacement character.
 *
 * @example
 * ```ts
 * replaceVowels("Hello World", "*"); // "H*ll* W*rld"
 * replaceVowels("Tweakr", "#"); // "Tw##kr"
 * ```
 *
 * @param input - The string to modify.
 * @param replacement - The character to replace vowels with.
 * @returns The string with vowels replaced.
 *
 * @group String
 * @since 1.2.0
 */
export function replaceVowels(input: string, replacement: string): string {
  return input.replace(/[aeiouAEIOU]/g, replacement);
}
