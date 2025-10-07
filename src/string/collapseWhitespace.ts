export function collapseWhitespace(str: string): string {
  return str.replace(/\s+/g, " ").trim();
}
