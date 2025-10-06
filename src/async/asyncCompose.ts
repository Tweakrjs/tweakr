type AsyncFn<I = any, O = any> = (input: I) => Promise<O> | O;

/**
 * Compose async functions right-to-left.
 */
export function asyncCompose<Input, Output>(
  ...fns: AsyncFn[]
): (input: Input) => Promise<Output> {
  return async (input: Input) => {
    let result: any = input;
    for (let i = fns.length - 1; i >= 0; i--) {
      result = await fns[i](result);
    }
    return result as Output;
  };
}
