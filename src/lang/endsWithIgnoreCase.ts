export function endsWithIgnoreCase(str: string, search: string): boolean {
  return str.toLowerCase().endsWith(search.toLowerCase());
}
