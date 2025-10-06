export function decimalPlaces(value: number): number {
  const match = value.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  if (!match) return 0;
  const decimals = match[1] ? match[1].length : 0;
  const exponent = match[2] ? parseInt(match[2]) : 0;
  return Math.max(0, decimals - exponent);
}
