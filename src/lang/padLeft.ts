export function padLeft(str: string, length: number, char = " "): string {
  str = String(str);
  if (str.length >= length) return str;
  return char.repeat(length - str.length) + str;
}
