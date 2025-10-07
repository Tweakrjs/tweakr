export function removeSuffix(str: string, suffix: string): string {
  if (str.slice(-suffix.length) === suffix) {
    return str.slice(0, -suffix.length);
  }
  return str;
}
