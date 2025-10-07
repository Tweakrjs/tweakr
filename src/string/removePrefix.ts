export function removePrefix(str: string, prefix: string): string {
  if (str.slice(0, prefix.length) === prefix) {
    return str.slice(prefix.length);
  }
  return str;
}
