/**
 * Replaces all occurrences of a substring or pattern in a string.
 *
 * @param str - The original string.
 * @param search - The substring or regular expression to search for.
 * @param replace - The string to replace matches with.
 * @returns A new string with all matches replaced.
 *
 * @category String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * replaceAll("hello world", "l", "L"); // "heLLo worLd"
 * replaceAll("foo bar foo", /foo/g, "baz"); // "baz bar baz"
 * ```
 */
export function replaceAll(
  str: string,
  search: string | RegExp,
  replace: string
): string {
  if (typeof search === "string") {
    return str.split(search).join(replace);
  }
  return str.replace(new RegExp(search, "g"), replace);
}
