/**
 * Composes multiple functions from left to right (a.k.a. pipeline).
 *
 * The output of each function is passed as input to the next function.
 *
 * @example
 * ```ts
 * const add = (x: number) => x + 1;
 * const double = (x: number) => x * 2;
 * const piped = pipe(add, double);
 * console.log(piped(3)); // (3 + 1) * 2 = 8
 * ```
 *
 * @param fns - Functions to pipe, applied from left to right.
 * @returns A function that represents the pipelined composition.
 *
 * @category Function
 * @since 1.1.0
 */
export function pipe(...fns: Function[]) {
  return (x: any) => fns.reduce((v, f) => f(v), x);
}
