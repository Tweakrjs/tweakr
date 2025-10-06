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
