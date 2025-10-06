export function queue(concurrency = 1) {
  const tasks: (() => Promise<void>)[] = [];
  let running = 0;

  const run = async () => {
    while (running < concurrency && tasks.length > 0) {
      const task = tasks.shift();
      if (!task) break;
      running++;
      task()
        .catch(() => {}) // ignore, user handles errors
        .finally(() => {
          running--;
          run(); // continue next task
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
