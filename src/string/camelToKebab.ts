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
  if (!input) return "";

  return (
    input
      // Step 1: insert dash before uppercase letters preceded by lowercase/number
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      // Step 2: insert dash between consecutive uppercase letters followed by lowercase
      .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
      // Step 3: insert dash between remaining consecutive uppercase letters
      .replace(/([A-Z])(?=[A-Z])/g, "$1-")
      .toLowerCase()
  );
}
