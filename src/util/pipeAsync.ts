/**
 * Composes multiple functions into a single async pipeline.
 *
 * Each function is invoked in sequence, passing the result of the previous function
 * to the next. Supports both synchronous and asynchronous functions, but the
 * pipeline always returns a Promise.
 *
 * @category Util
 * @since 1.1.0
 *
 * @template T - The type of the initial input value.
 *
 * @param fns - An array of functions to compose. Each function receives the result
 *              of the previous function.
 *
 * @returns A function that takes an initial input and returns a Promise resolving
 *          to the final result after all functions have been applied.
 *
 * @example
 * ```ts
 * const add = async (x: number) => x + 1;
 * const double = (x: number) => x * 2;
 *
 * const pipeline = pipeAsync<number>(add, double);
 * const result = await pipeline(3); // ((3 + 1) * 2) = 8
 * ```
 */
export function pipeAsync<T>(...fns: Array<(arg: any) => any>) {
  return async (input: T): Promise<any> => {
    let result: any = input;
    for (const fn of fns) {
      result = await fn(result);
    }
    return result;
  };
}
