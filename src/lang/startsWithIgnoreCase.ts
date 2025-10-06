export function startsWithIgnoreCase(str: string, search: string): boolean {
  return str.toLowerCase().startsWith(search.toLowerCase());
}
