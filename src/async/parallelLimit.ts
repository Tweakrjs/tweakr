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
