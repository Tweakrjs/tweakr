/**
 * Converts a string to title case, capitalizing the first letter of each word.
 *
 * @param str - The input string.
 * @returns The string in title case.
 *
 * @category String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * titleCase("hello world"); // "Hello World"
 * titleCase("javaScript IS fun"); // "Javascript Is Fun"
 * ```
 */
export function titleCase(str: string): string {
  return str.replace(
    /\w\S*/g,
    (txt) => txt[0].toUpperCase() + txt.slice(1).toLowerCase()
  );
}
