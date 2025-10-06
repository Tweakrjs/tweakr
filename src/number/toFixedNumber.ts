export function toFixedNumber(value: number, decimals = 2): number {
  if (!Number.isFinite(value)) return value; // preserve NaN/Infinity
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
