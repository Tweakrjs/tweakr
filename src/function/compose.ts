/**
 * Composes multiple functions from right to left.
 *
 * The result of each function is passed as input to the previous function.
 *
 * @example
 * ```ts
 * const add = (x: number) => x + 1;
 * const double = (x: number) => x * 2;
 * const composed = compose(double, add);
 * console.log(composed(3)); // (3 + 1) * 2 = 8
 * ```
 *
 * @param fns - Functions to compose, applied from right to left.
 * @returns A function that represents the composition of the input functions.
 *
 * @group Function
 * @since 1.1.0
 */
export function compose(...fns: Function[]) {
  return (x: any) => fns.reduceRight((v, f) => f(v), x);
}
