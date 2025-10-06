export function pipeAsync<T>(...fns: Array<(arg: any) => any>) {
  return async (input: T): Promise<any> => {
    let result: any = input;
    for (const fn of fns) {
      result = await fn(result);
    }
    return result;
  };
}
