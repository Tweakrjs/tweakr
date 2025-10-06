export function wordCount(str: string): number {
  const match = str.trim().match(/\S+/g);
  return match ? match.length : 0;
}
