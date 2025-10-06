export function toPercentage(
  value: number,
  total: number,
  decimals = 2
): number {
  if (total === 0) return 0;
  return parseFloat(((value / total) * 100).toFixed(decimals));
}
