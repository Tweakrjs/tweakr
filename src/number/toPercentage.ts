export function toPercentage(
  value: number,
  total: number,
  decimals = 2
): number {
  if (total === 0) return 0;
  const factor = 10 ** decimals;
  const percentage = (value / total) * 100;
  return Math.round(percentage * factor) / factor;
}
