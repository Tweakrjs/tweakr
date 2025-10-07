export function pipeN<T1, T2>(fn1: (arg: T1) => T2): (arg: T1) => T2;
export function pipeN<T1, T2, T3>(
  fn1: (arg: T1) => T2,
  fn2: (arg: T2) => T3
): (arg: T1) => T3;
export function pipeN<T1, T2, T3, T4>(
  fn1: (arg: T1) => T2,
  fn2: (arg: T2) => T3,
  fn3: (arg: T3) => T4
): (arg: T1) => T4;
/**
 * Pipes multiple functions left-to-right.
 *
 * @example
 * const double = (x: number) => x * 2;
 * const addOne = (x: number) => x + 1;
 * const result = pipeN(double, addOne)(3); // (3*2)+1 = 7
 *
 * @group Function
 * @since 1.2.0
 */
export function pipeN(...fns: Function[]) {
  return (arg: unknown) => fns.reduce((acc, fn) => fn(acc), arg);
}
