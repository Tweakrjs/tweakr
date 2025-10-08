/**
 * Creates an async task queue with controlled concurrency.
 *
 * Tasks are executed in FIFO order, respecting the concurrency limit.
 * Each `add` call returns a promise that resolves/rejects with the task result.
 *
 * @example
 * ```ts
 * const q = queue(2);
 *
 * for (let i = 0; i < 5; i++) {
 *   q.add(async () => {
 *     console.log("Task", i, "started");
 *     await new Promise(r => setTimeout(r, 100));
 *     console.log("Task", i, "done");
 *     return i * 2;
 *   }).then(result => console.log("Result:", result));
 * }
 * ```
 *
 * @param concurrency - Maximum number of tasks running at once (default: 1).
 * @returns An object with methods to add tasks and inspect queue state.
 *
 * @group Async
 * @since 1.2.0
 */
export function queue(concurrency = 1) {
  const tasks: Array<() => Promise<any>> = [];
  let activeCount = 0;

  const runNext = async () => {
    if (activeCount >= concurrency || tasks.length === 0) return;

    const task = tasks.shift()!;
    activeCount++;

    try {
      await task();
    } catch {
      // Errors are handled by individual task promises
    } finally {
      activeCount--;
      runNext(); // Start next task after finishing this one
    }
  };

  return {
    /**
     * Add a new async task to the queue.
     * @param task - The async task function returning a promise.
     * @returns A promise that resolves/rejects with the task result.
     */
    add: <T>(task: () => Promise<T>): Promise<T> => {
      return new Promise<T>((resolve, reject) => {
        const wrappedTask = async () => {
          try {
            const result = await task();
            resolve(result);
            return result;
          } catch (err) {
            reject(err);
            throw err;
          }
        };

        tasks.push(wrappedTask);
        runNext();
      });
    },

    /** Returns the number of pending tasks in the queue. */
    size: () => tasks.length,

    /** Returns the number of currently active/running tasks. */
    running: () => activeCount,
  };
}
