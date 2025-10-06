export async function parallelLimit<T>(
  tasks: (() => Promise<T>)[],
  limit = 5
): Promise<T[]> {
  const results: T[] = [];
  let index = 0;

  async function worker() {
    while (index < tasks.length) {
      const i = index++;
      results[i] = await tasks[i]();
    }
  }

  await Promise.all(
    Array(Math.min(limit, tasks.length)).fill(null).map(worker)
  );
  return results;
}
