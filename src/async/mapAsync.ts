/**
 * Asynchronously maps over an array using a provided async function, with optional concurrency control.
 *
 * Executes up to `concurrency` mapping operations in parallel until all items are processed.
 * Ensures results maintain the original array order.
 *
 * @example
 * ```ts
 * const fetchNumber = async (n: number) => n * 2;
 * await mapAsync([1, 2, 3, 4], fetchNumber, 2);
 * // → [2, 4, 6, 8]
 * ```
 *
 * @typeParam T - The type of elements in the input array.
 * @typeParam R - The type of elements in the resulting array.
 * @param arr - The array to iterate over.
 * @param fn - The async function invoked per element.
 * @param concurrency - The maximum number of concurrent async operations. Defaults to `Infinity`.
 * @returns A promise that resolves to an array of mapped results.
 *
 * @group Async
 * @since 1.0.0
 */
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
