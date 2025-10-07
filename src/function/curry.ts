/**
 * Transforms a function into a curried version.
 *
 * A curried function can be called with fewer arguments than it expects,
 * returning a new function that accepts the remaining arguments.
 *
 * @example
 * ```ts
 * const add = (a: number, b: number, c: number) => a + b + c;
 * const curriedAdd = curry(add);
 * console.log(curriedAdd(1)(2)(3)); // 6
 * console.log(curriedAdd(1, 2)(3)); // 6
 * ```
 *
 * @param fn - The function to curry.
 * @param arity - The number of arguments `fn` expects (defaults to `fn.length`).
 * @returns A curried version of the function.
 *
 * @category Function
 * @since 1.1.0
 */
export function curry(fn: Function, arity = fn.length): any {
  return (...args: any[]) =>
    args.length >= arity
      ? fn(...args)
      : curry(fn.bind(null, ...args), arity - args.length);
}
