/**
 * Creates a function that only accepts a single argument,
 * ignoring any additional arguments passed to it.
 *
 * @example
 * ```ts
 * const parse = unary(JSON.parse);
 * parse('{"a":1}', 'extra'); // ignores 'extra', only uses the first argument
 * ```
 *
 * @param fn - The function to wrap.
 * @returns A new function that only takes the first argument.
 *
 * @group Function
 * @since 1.1.0
 */
export function unary<T extends (...args: any[]) => any>(fn: T) {
  return (arg: Parameters<T>[0]) => fn(arg);
}
