/**
 * Asynchronously reduces an array to a single accumulated value.
 *
 * Each iteration awaits the result of the provided async reducer function before continuing.
 * This allows for sequential async transformations over array items.
 *
 * @example
 * ```ts
 * const result = await reduceAsync(
 *   [1, 2, 3],
 *   async (acc, val) => acc + val,
 *   0
 * );
 * console.log(result); // 6
 * ```
 *
 * @template T - Type of elements in the input array.
 * @template R - Type of the accumulated result.
 * @param arr - The array to iterate over.
 * @param fn - An async reducer function called for each element.
 * @param initial - The initial accumulator value.
 * @returns A promise that resolves to the final accumulated result.
 *
 * @group Async
 * @since 1.1.0
 */
export async function reduceAsync<T, R>(
  arr: T[],
  fn: (acc: R, val: T, index: number, array: T[]) => Promise<R>,
  initial: R
): Promise<R> {
  let acc = initial;
  for (let i = 0; i < arr.length; i++) {
    acc = await fn(acc, arr[i], i, arr);
  }
  return acc;
}
