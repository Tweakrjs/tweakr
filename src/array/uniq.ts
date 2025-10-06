export function uniq<T>(array: T[]): T[] {
  const seenPrimitives = new Set<T>();
  const seenObjects = new Set<object>();
  const result: T[] = [];

  for (const item of array) {
    if (item !== null && typeof item === "object") {
      if (!seenObjects.has(item as object)) {
        seenObjects.add(item as object);
        result.push(item);
      }
    } else {
      if (!seenPrimitives.has(item)) {
        seenPrimitives.add(item);
        result.push(item);
      }
    }
  }

  return result;
}
