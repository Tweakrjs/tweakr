export function asyncCompose(...fns: ((...args: any[]) => Promise<any>)[]) {
  return async (input: any) => {
    let result = input;
    for (let i = fns.length - 1; i >= 0; i--) result = await fns[i](result);
    return result;
  };
}
