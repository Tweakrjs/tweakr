export function padRight(str: string, length: number, char = " "): string {
  str = String(str);
  if (str.length >= length) return str;
  return str + char.repeat(length - str.length);
}
