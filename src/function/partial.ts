/**
 * Creates a partially applied function by pre-filling some arguments,
 * preserving the ability to use rest parameters and full TypeScript inference.
 *
 * @example
 * const greet = (greeting: string, name: string, ...titles: string[]) =>
 *   `${greeting}, ${name}${titles.length ? " (" + titles.join(", ") + ")" : ""}!`;
 *
 * const sayHelloTo = partial(greet, "Hello");
 * sayHelloTo("Alice", "PhD", "Professor"); // "Hello, Alice (PhD, Professor)!"
 *
 * // Works with multiple chained partials
 * const add = (a: number, b: number, c: number, d: number) => a + b + c + d;
 * const step1 = partial(add, 1);
 * const step2 = partial(step1, 2);
 * const step3 = partial(step2, 3);
 * console.log(step3(4)); // 10
 *
 * @param fn - The function to partially apply.
 * @param presetArgs - Arguments to pre-fill for `fn`.
 * @returns A new function that accepts the remaining arguments.
 *
 * @group Function
 * @since 1.2.0
 */
export function partial<T extends (...args: any[]) => any, P extends any[]>(
  fn: T,
  ...presetArgs: P
): (...laterArgs: Tail<Parameters<T>, P>) => ReturnType<T> {
  return (...laterArgs: any[]) => fn(...presetArgs, ...laterArgs);
}

/**
 * Utility type: removes the first N elements (length of U) from tuple T.
 */
type Tail<T extends any[], U extends any[]> = T extends [...U, ...infer R]
  ? R
  : [];
