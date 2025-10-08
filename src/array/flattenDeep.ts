/**
 * Internal core flatten function.
 * Handles shallow, deep, and depth-limited flattening.
 *
 * @param array - The array to flatten.
 * @param depth - Number for depth, `true` for full flatten, or `1` for shallow.
 * @returns Flattened array.
 */
function _flatten<T>(array: any[], depth: number | boolean = 1): T[] {
  const result: T[] = [];
  const maxDepth =
    depth === true ? Infinity : typeof depth === "number" ? depth : 1;

  if (maxDepth === 0) return array.slice(); // shallow copy if depth = 0

  const stack: { arr: any[]; level: number; index: number }[] = [
    { arr: array, level: 0, index: 0 },
  ];

  while (stack.length) {
    const top = stack[stack.length - 1];
    const { arr, level, index } = top;

    if (index >= arr.length) {
      stack.pop();
      continue;
    }

    const item = arr[index];
    top.index++; // move to next element

    if (Array.isArray(item) && level < maxDepth) {
      stack.push({ arr: item, level: level + 1, index: 0 });
    } else {
      result.push(item);
    }
  }

  return result;
}

/**
 * Recursively flattens an array up to the specified depth.
 *
 * Fully flattens if depth is `Infinity` (default).
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
 * @param depth - Maximum depth to flatten. Default: Infinity.
 * @returns Flattened array up to the specified depth.
 *
 * @group Array
 * @since 1.2.0
 */
export function flattenDeep<T>(array: any[], depth: number = Infinity): T[] {
  return _flatten(array, depth);
}
