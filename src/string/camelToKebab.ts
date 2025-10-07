/**
 * Converts a camelCase string to kebab-case.
 *
 * @example
 * ```ts
 * camelToKebab("helloWorld"); // "hello-world"
 * camelToKebab("tweakrLibraryUtils"); // "tweakr-library-utils"
 * ```
 *
 * @param input - The camelCase string.
 * @returns The kebab-case string.
 *
 * @group String
 * @since 1.2.0
 */
export function camelToKebab(input: string): string {
  return input.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
