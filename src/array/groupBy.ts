/**
 * Groups elements of an array by a key derived from each element.
 *
 * The grouping key can be returned from a callback function.
 * Handles `undefined` and `null` keys safely by grouping them under `"__undefined__"`.
 *
 * @example
 * ```ts
 * groupBy(
 *   [{ id: 1, type: "a" }, { id: 2, type: "b" }, { id: 3, type: "a" }],
 *   (item) => item.type
 * );
 * // → { a: [{ id: 1, type: "a" }, { id: 3, type: "a" }], b: [{ id: 2, type: "b" }] }
 *
 * groupBy([1, 2, null, 3], (n) => (n ?? "missing").toString());
 * // → { "1": [1], "2": [2], "missing": [null], "3": [3] }
 * ```
 *
 * @param array - The array to group.
 * @param keyFn - A function that returns the key used for grouping.
 * @returns An object where keys represent group identifiers and values are arrays of grouped elements.
 *
 * @group Array
 * @since 1.2.0
 */
export function groupBy<T, K extends keyof any>(
  array: T[],
  keyFn: (item: T) => K | undefined | null
): Record<string, T[]> {
  const result: Record<string, T[]> = {};

  for (const item of array) {
    let key = keyFn(item);
    if (key === undefined || key === null) {
      key = "__undefined__" as K;
    }
    const stringKey = String(key);
    if (!result[stringKey]) {
      result[stringKey] = [];
    }
    result[stringKey].push(item);
  }

  return result;
}
