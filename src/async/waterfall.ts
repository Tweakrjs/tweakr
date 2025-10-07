/**
 * Executes asynchronous tasks sequentially, passing the result of each task
 * as input to the next one (waterfall pattern).
 *
 * @example
 * ```ts
 * const tasks = [
 *   async (x: number) => x + 1,
 *   async (x: number) => x * 2,
 *   async (x: number) => x - 3
 * ];
 *
 * const result = await waterfall(tasks, 5);
 * console.log(result); // ((5 + 1) * 2) - 3 = 9
 * ```
 *
 * @template T - Type of the initial input value.
 * @param tasks - An array of async functions, each receiving the previous result as input.
 * @param initial - The initial input value for the first task.
 * @returns A promise resolving to the final task’s result.
 *
 * @category Async
 * @since 1.1.0
 */
export async function waterfall<T>(
  tasks: ((input: any) => Promise<any>)[],
  initial: T
): Promise<any> {
  let result: any = initial;
  for (const task of tasks) result = await task(result);
  return result;
}
