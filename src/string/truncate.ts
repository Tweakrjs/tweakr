export function truncate(str: string, max: number, suffix = "…"): string {
  if (max <= 0) return ""; // max is zero or negative
  if (str.length <= max) return str;
  if (max <= suffix.length) return suffix.slice(0, max); // max too small for text, show partial suffix
  return str.slice(0, max - suffix.length) + suffix;
}
