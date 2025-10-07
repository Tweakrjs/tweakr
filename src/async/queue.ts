/**
 * Creates an async task queue with controlled concurrency.
 *
 * Tasks are executed in FIFO order, respecting the concurrency limit.
 * When a task completes, the next one in the queue starts automatically.
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
 *   });
 * }
 * ```
 *
 * @param concurrency - Maximum number of tasks running at once (default: 1).
 * @returns An object with methods to add tasks, and check queue state.
 *
 * @method add - Adds a new async task to the queue.
 * @method size - Returns the number of pending tasks.
 * @method running - Returns the number of currently active tasks.
 *
 * @category Async
 * @since 1.1.0
 */
export function queue(concurrency = 1) {
  const tasks: (() => Promise<void>)[] = [];
  let running = 0;

  const run = async () => {
    while (running < concurrency && tasks.length > 0) {
      const task = tasks.shift();
      if (!task) break;
      running++;
      task()
        .catch(() => {
          // Errors are handled by the user in their own task
        })
        .finally(() => {
          running--;
          run(); // continue next task automatically
        });
    }
  };

  return {
    add: (task: () => Promise<void>) => {
      tasks.push(task);
      run();
    },
    size: () => tasks.length,
    running: () => running,
  };
}
