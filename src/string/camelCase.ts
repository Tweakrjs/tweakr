/**
 * Converts a string to camelCase.
 *
 * Replaces spaces, hyphens, and underscores with camel casing.
 * The first character of the resulting string is always lowercase.
 *
 * @param str - The input string to convert.
 * @returns The camelCase version of the input string.
 * @category String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * camelCase('hello_world'); // 'helloWorld'
 * camelCase('foo-bar-baz'); // 'fooBarBaz'
 * camelCase('Make me camel'); // 'makeMeCamel'
 * ```
 */
export function camelCase(str: string): string {
  return str
    .replace(/[-_]+/g, " ")
    .replace(/\s(.)/g, (_, chr) => chr.toUpperCase())
    .replace(/\s+/g, "")
    .replace(/^(.)/, (_, chr) => chr.toLowerCase());
}
