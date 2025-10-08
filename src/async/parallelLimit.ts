/**
 * Executes asynchronous tasks in parallel with a concurrency limit.
 *
 * Tasks are executed up to `limit` at a time. Results are returned
 * in the same order as the original task array.
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
 * @returns A promise resolving to an array of results in original order.
 *
 * @throws If any task rejects, the error is propagated immediately.
 *
 * @group Async
 * @since 1.2.0
 */
export async function parallelLimit<T>(
  tasks: Array<() => Promise<T>>,
  limit = 5
): Promise<T[]> {
  const results: T[] = [];
  let currentIndex = 0;

  const worker = async (): Promise<void> => {
    while (true) {
      const i = currentIndex++;
      if (i >= tasks.length) break;

      try {
        results[i] = await tasks[i]();
      } catch (err) {
        throw err; // propagate error immediately
      }
    }
  };

  // Start up to `limit` workers
  await Promise.all(
    Array.from({ length: Math.min(limit, tasks.length) }, () => worker())
  );

  return results;
}
