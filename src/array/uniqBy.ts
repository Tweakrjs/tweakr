export function uniqBy<T>(array: T[], iteratee: (item: T) => any): T[] {
  const seen = new Set();
  return array.filter((item) => {
    const key = iteratee(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
