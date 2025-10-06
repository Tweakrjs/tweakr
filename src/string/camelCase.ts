export function camelCase(str: string): string {
  return str
    .replace(/[-_]+/g, " ")
    .replace(/\s(.)/g, (_, chr) => chr.toUpperCase())
    .replace(/\s+/g, "")
    .replace(/^(.)/, (_, chr) => chr.toLowerCase());
}
