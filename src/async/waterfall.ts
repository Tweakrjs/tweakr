export async function waterfall<T>(
  tasks: ((input: any) => Promise<any>)[],
  initial: T
): Promise<any> {
  let result: any = initial;
  for (const task of tasks) result = await task(result);
  return result;
}
