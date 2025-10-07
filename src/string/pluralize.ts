/**
 * Returns the plural form of a word based on the provided count.
 *
 * @param word - The singular form of the word.
 * @param count - The count to determine singular or plural form.
 * @returns The appropriately pluralized word.
 *
 * @group String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * pluralize("cat", 1); // "cat"
 * pluralize("cat", 3); // "cats"
 * pluralize("baby", 2); // "babies"
 * pluralize("bus", 2); // "buses"
 * ```
 */
export function pluralize(word: string, count: number): string {
  if (count === 1) return word;
  if (word.endsWith("y")) return word.slice(0, -1) + "ies";
  if (word.endsWith("s")) return word + "es";
  return word + "s";
}
