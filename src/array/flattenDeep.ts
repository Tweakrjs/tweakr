/**
 * Recursively flattens an array up to the specified depth.
 *
 * If no depth is provided, it flattens all nested arrays (infinite depth by default).
 *
 * @example
 * ```ts
 * flattenDeep([1, [2, [3, [4]]]], 2);
 * // → [1, 2, 3, [4]]
 *
 * flattenDeep([1, [2, [3, [4]]]]);
 * // → [1, 2, 3, 4]
 * ```
 *
 * @param array - The array to flatten.
 * @param depth - The maximum depth to flatten. Defaults to `Infinity`.
 * @returns A new flattened array up to the specified depth.
 *
 * @group Array
 * @since 1.1.0
 */
export function flattenDeep<T>(array: any[], depth: number = Infinity): T[] {
  const result: T[] = [];
  const stack: { arr: any[]; level: number }[] = [{ arr: array, level: 0 }];

  while (stack.length) {
    const { arr, level } = stack.pop()!;
    for (const item of arr) {
      if (Array.isArray(item) && level < depth) {
        // Push nested array with incremented level
        stack.push({ arr: item, level: level + 1 });
      } else {
        result.push(item);
      }
    }
  }

  return result;
}
