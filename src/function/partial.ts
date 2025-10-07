/**
 * Creates a partially applied function by pre-filling some arguments.
 *
 * @example
 * ```ts
 * const greet = (greeting: string, name: string) => `${greeting}, ${name}!`;
 * const sayHelloTo = partial(greet, "Hello");
 * console.log(sayHelloTo("Alice")); // "Hello, Alice!"
 * ```
 *
 * @param fn - The function to partially apply.
 * @param presetArgs - Arguments to pre-fill for `fn`.
 * @returns A new function that accepts the remaining arguments.
 *
 * @category Function
 * @since 1.1.0
 */
export function partial(fn: Function, ...presetArgs: any[]) {
  return (...laterArgs: any[]) => fn(...presetArgs, ...laterArgs);
}
