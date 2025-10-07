export function endsWith(str: string, suffix: string): boolean {
  if (suffix === "") return true;
  return str.slice(-suffix.length) === suffix;
}
