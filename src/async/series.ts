/**
 * Executes an array of asynchronous tasks sequentially (one after another),
 * returning an array of results in the same order as the tasks.
 *
 * Unlike `parallelLimit`, tasks are not run concurrently.
 *
 * @example
 * ```ts
 * const tasks = [
 *   async () => 1,
 *   async () => 2,
 *   async () => 3
 * ];
 * const results = await series(tasks);
 * console.log(results); // [1, 2, 3]
 * ```
 *
 * @template T - The type of each task’s resolved value.
 * @param tasks - An array of functions returning promises.
 * @returns A promise that resolves to an array of task results.
 *
 * @group Async
 * @since 1.1.0
 */
export async function series<T>(tasks: (() => Promise<T>)[]): Promise<T[]> {
  const results: T[] = [];
  for (const task of tasks) results.push(await task());
  return results;
}
