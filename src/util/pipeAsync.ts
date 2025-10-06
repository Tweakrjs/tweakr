export function pipeAsync<T>(
  ...fns: Array<(arg: any) => any>
): (input: T) => Promise<any> {
  return async (input: T) => {
    let result = input;
    for (const fn of fns) {
      result = await fn(result);
    }
    return result;
  };
}
