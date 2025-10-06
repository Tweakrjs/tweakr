export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^\w-]+/g, "");
}
