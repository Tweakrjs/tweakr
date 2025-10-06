export function isFiniteNumber(n: unknown): n is number {
  return typeof n === "number" && isFinite(n);
}
