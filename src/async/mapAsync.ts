export async function mapAsync<T, R>(
  arr: T[],
  fn: (item: T, index: number, array: T[]) => Promise<R>,
  concurrency = Infinity
): Promise<R[]> {
  const results: R[] = [];
  let index = 0;

  async function worker() {
    while (index < arr.length) {
      const i = index++;
      results[i] = await fn(arr[i], i, arr);
    }
  }

  await Promise.all(
    Array(Math.min(concurrency, arr.length)).fill(null).map(worker)
  );
  return results;
}
