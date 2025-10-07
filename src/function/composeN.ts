export function composeN<T1, T2>(fn1: (arg: T1) => T2): (arg: T1) => T2;
export function composeN<T1, T2, T3>(
  fn1: (arg: T2) => T3,
  fn2: (arg: T1) => T2
): (arg: T1) => T3;
export function composeN<T1, T2, T3, T4>(
  fn1: (arg: T3) => T4,
  fn2: (arg: T2) => T3,
  fn3: (arg: T1) => T2
): (arg: T1) => T4;

/**
 * Composes multiple functions right-to-left.
 *
 * @example
 * const double = (x: number) => x * 2;
 * const addOne = (x: number) => x + 1;
 * const result = composeN(addOne, double)(3); // addOne(double(3)) = 7
 *
 * @group Function
 * @since 1.2.0
 */
export function composeN(...fns: Function[]) {
  return (arg: unknown) => fns.reduceRight((acc, fn) => fn(acc), arg);
}
