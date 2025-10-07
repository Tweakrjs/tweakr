export function replaceAll(
  str: string,
  search: string | RegExp,
  replace: string
): string {
  if (typeof search === "string") {
    return str.split(search).join(replace);
  }
  return str.replace(new RegExp(search, "g"), replace);
}
