/**
 * Interpolates placeholders in a string with values from a given object.
 *
 * Placeholders are in the format `{key}`. If the key exists in `vars`,
 * it will be replaced with the corresponding value. Otherwise, the placeholder
 * remains unchanged.
 *
 * @param str - The string containing placeholders.
 * @param vars - An object mapping keys to values for interpolation.
 * @returns The interpolated string.
 *
 * @category String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * interpolate("Hello, {name}!", { name: "Alice" }); // "Hello, Alice!"
 * interpolate("Age: {age}", { }); // "Age: {age}"
 * ```
 */
export function interpolate(str: string, vars: Record<string, any>): string {
  return str.replace(/\{(\w+)\}/g, (_, key) =>
    key in vars ? String(vars[key]) : `{${key}}`
  );
}
