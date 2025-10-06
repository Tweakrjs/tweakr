export function invert(
  obj: Record<string, string | number>
): Record<string, string> {
  const result: Record<string, string> = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[obj[key].toString()] = key;
    }
  }
  return result;
}
