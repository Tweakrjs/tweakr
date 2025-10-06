export function queue(concurrency = 1) {
  const tasks: (() => Promise<void>)[] = [];
  let running = 0;

  async function run() {
    if (running >= concurrency || tasks.length === 0) return;
    const task = tasks.shift();
    if (!task) return;
    running++;
    try {
      await task();
    } finally {
      running--;
      run();
    }
  }

  return {
    add: (task: () => Promise<void>) => {
      tasks.push(task);
      run();
    },
    size: () => tasks.length,
  };
}
