/**
 * Asynchronously filters an array based on a provided async predicate function.
 *
 * Executes all predicate calls in parallel using `Promise.all`, and returns
 * a new array containing only the elements for which the predicate resolves to `true`.
 *
 * @example
 * ```ts
 * const isEvenAsync = async (n: number) => n % 2 === 0;
 * await filterAsync([1, 2, 3, 4], isEvenAsync);
 * // → [2, 4]
 * ```
 *
 * @typeParam T - The type of elements in the input array.
 * @param arr - The array to filter.
 * @param predicate - An async function called for each element. Should resolve to `true` to keep the element.
 * @returns A promise that resolves to a new array containing the filtered elements.
 *
 * @group Async
 * @since 1.0.0
 */
export async function filterAsync<T>(
  arr: T[],
  predicate: (item: T, index: number, array: T[]) => Promise<boolean>
): Promise<T[]> {
  const results = await Promise.all(arr.map(predicate));
  return arr.filter((_, i) => results[i]);
}
