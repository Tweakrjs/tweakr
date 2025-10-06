export function asyncPipe(...fns: ((...args: any[]) => Promise<any>)[]) {
  return async (input: any) => {
    let result = input;
    for (const fn of fns) result = await fn(result);
    return result;
  };
}
