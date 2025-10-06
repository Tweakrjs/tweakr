type AsyncFn<I = any, O = any> = (input: I) => Promise<O> | O;

/**
 * Pipe async functions left-to-right.
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
