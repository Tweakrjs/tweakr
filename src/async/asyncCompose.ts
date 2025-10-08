/**
 * Represents a function that can be asynchronous or synchronous.
 *
 * @template I - Input type.
 * @template O - Output type.
 * @param input - The input value.
 * @returns A value of type `O` or a `Promise` resolving to `O`.
 *
 * @group Async
 * @since 1.0.0
 */
export type AsyncFn<I = any, O = any> = (input: I) => Promise<O> | O;

/**
 * Composes multiple asynchronous (or synchronous) functions into a single function,
 * executing them from right to left.
 *
 * @example
 * const addOne = async (x: number) => x + 1;
 * const double = async (x: number) => x * 2;
 *
 * const process = asyncCompose(double, addOne);
 * await process(3); // → 8
 *
 * @typeParam Input - The input type of the composed function.
 * @typeParam Output - The final output type after all compositions.
 * @param fns - Functions to compose, executed from right to left.
 * @returns A new function that represents the asynchronous composition.
 *
 * @group Async
 * @since 1.0.0
 */
export function asyncCompose<Input, Output>(
  ...fns: AsyncFn[]
): (input: Input) => Promise<Output> {
  return async (input: Input) => {
    let result: any = input;
    for (let i = fns.length - 1; i >= 0; i--) {
      try {
        result = await fns[i](result);
      } catch (err) {
        // propagate errors immediately
        throw err;
      }
    }
    return result as Output;
  };
}
