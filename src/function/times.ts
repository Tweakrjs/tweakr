/**
 * Invokes a function `n` times, passing the current index on each call.
 *
 * @example
 * ```ts
 * times(3, (i) => console.log(i));
 * // Output:
 * // 0
 * // 1
 * // 2
 * ```
 *
 * @param n - Number of times to invoke the function.
 * @param fn - Function to execute, receives the current index as argument.
 *
 * @category Function
 * @since 1.1.0
 */
export function times(n: number, fn: (index: number) => void) {
  for (let i = 0; i < n; i++) fn(i);
}
