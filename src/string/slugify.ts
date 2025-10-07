/**
 * Converts a string into a URL-friendly "slug".
 *
 * @param str - The input string to convert.
 * @returns The slugified version of the string, lowercase with words
 *          separated by hyphens and special characters removed.
 *
 * @group String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * slugify("Hello World!"); // "hello-world"
 * slugify("  Some_text_here "); // "some-text-here"
 * slugify("Café & Restaurant"); // "café-restaurant"
 * ```
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^\w-]+/g, "");
}
