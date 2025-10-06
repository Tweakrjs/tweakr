export function toFixedNumber(value: number, decimals = 2): number {
  return parseFloat(value.toFixed(decimals));
}
