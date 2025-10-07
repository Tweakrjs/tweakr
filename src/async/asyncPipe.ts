/**
 * Represents a function that can be asynchronous or synchronous.
 *
 * @template I - Input type.
 * @template O - Output type.
 * @param input - The input value.
 * @returns A value of type `O` or a `Promise` resolving to `O`.
 *
 * @category Async
 * @since 1.0.0
 */
type AsyncFn<I = any, O = any> = (input: I) => Promise<O> | O;

/**
 * Pipes multiple asynchronous (or synchronous) functions into a single function,
 * executing them from left to right.
 *
 * This is the opposite of `asyncCompose`, where the output of each function
 * becomes the input of the next in order.
 *
 * @example
 * ```ts
 * const addOne = async (x: number) => x + 1;
 * const double = async (x: number) => x * 2;
 *
 * const process = asyncPipe(addOne, double);
 * await process(3);
 * // → 8  (addOne(3) → 4 → double(4) → 8)
 * ```
 *
 * @typeParam Input - The input type of the piped function.
 * @typeParam Output - The final output type after all functions execute.
 * @param fns - Functions to pipe, executed from left to right.
 * @returns A new function that represents the asynchronous pipeline.
 *
 * @category Async
 * @since 1.0.0
 */
export function asyncPipe<Input, Output>(
  ...fns: AsyncFn[]
): (input: Input) => Promise<Output> {
  return async (input: Input) => {
    let result: any = input;
    for (const fn of fns) {
      result = await fn(result);
    }
    return result as Output;
  };
}
