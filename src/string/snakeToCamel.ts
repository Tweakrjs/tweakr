/**
 * Converts a snake_case string to camelCase.
 *
 * @example
 * ```ts
 * snakeToCamel("hello_world"); // "helloWorld"
 * snakeToCamel("tweakr_library_utils"); // "tweakrLibraryUtils"
 * ```
 *
 * @param input - The snake_case string.
 * @returns The camelCase string.
 *
 * @group String
 * @since 1.2.0
 */
export function snakeToCamel(input: string): string {
  return input.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}
