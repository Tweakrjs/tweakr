/**
 * Executes asynchronous tasks in parallel, but limits
 * the number of concurrent executions.
 *
 * Useful for controlling concurrency when performing
 * network requests, file operations, or heavy computations.
 *
 * @example
 * ```ts
 * const tasks = Array.from({ length: 10 }, (_, i) => async () => {
 *   await new Promise(r => setTimeout(r, 100));
 *   return i;
 * });
 *
 * const results = await parallelLimit(tasks, 3);
 * console.log(results); // [0, 1, 2, 3, ...]
 * ```
 *
 * @typeParam T - The type of each resolved result.
 * @param tasks - An array of async task functions returning promises.
 * @param limit - Maximum number of concurrent tasks (default: 5).
 * @returns A promise resolving to an array of results, preserving order.
 *
 * @throws If any task rejects, the error is propagated immediately.
 *
 * @group Async
 * @since 1.0.0
 */
export async function parallelLimit<T>(
  tasks: (() => Promise<T>)[],
  limit = 5
): Promise<T[]> {
  const results: T[] = [];
  let index = 0;

  const worker = async () => {
    while (true) {
      const i = index++;
      if (i >= tasks.length) break;
      try {
        results[i] = await tasks[i]();
      } catch (err) {
        throw err; // propagate errors
      }
    }
  };

  await Promise.all(
    Array(Math.min(limit, tasks.length)).fill(null).map(worker)
  );
  return results;
}
