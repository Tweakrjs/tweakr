/**
 * Converts a plural word to its singular form using simple rules.
 *
 * @param word - The plural word to convert.
 * @returns The singular form of the word.
 *
 * @category String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * singularize("batteries"); // "battery"
 * singularize("boxes");     // "box"
 * singularize("cars");      // "car"
 * singularize("sheep");     // "sheep" (unchanged)
 * ```
 */
export function singularize(word: string): string {
  if (word.endsWith("ies")) return word.slice(0, -3) + "y";
  if (word.endsWith("es") && word.length > 2) return word.slice(0, -2);
  if (word.endsWith("s")) return word.slice(0, -1);
  return word;
}
