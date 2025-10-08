/**
 * Replaces all occurrences of a substring or pattern in a string.
 *
 * @param str - The original string.
 * @param search - The substring or regular expression to search for.
 * @param replace - The string to replace matches with.
 * @returns A new string with all matches replaced.
 *
 * @group String
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
  if (!str || !search) return str;

  if (typeof search === "string") {
    if (search === "") return str;
    return str.split(search).join(replace);
  }

  // Preserve flags, add 'g' if missing
  const flags = search.flags.includes("g") ? search.flags : search.flags + "g";

  // Custom replacer to preserve original match casing
  return str.replace(new RegExp(search.source, flags), (match) => {
    // If match is capitalized, capitalize replacement
    if (match[0] === match[0].toUpperCase()) {
      return replace[0].toUpperCase() + replace.slice(1);
    }
    return replace;
  });
}
