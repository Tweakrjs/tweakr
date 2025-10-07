/**
 * Returns a number formatted with its ordinal suffix.
 *
 * Examples:
 * - 1 → "1st"
 * - 2 → "2nd"
 * - 3 → "3rd"
 * - 4 → "4th"
 * - 11 → "11th"
 *
 * @param num - The number to format.
 * @returns The number with its ordinal suffix as a string.
 *
 * @category String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * ordinalSuffix(1); // "1st"
 * ordinalSuffix(22); // "22nd"
 * ordinalSuffix(113); // "113th"
 * ```
 */
export function ordinalSuffix(num: number): string {
  const abs = Math.abs(num);
  const j = abs % 10;
  const k = abs % 100;

  if (k >= 11 && k <= 13) {
    return `${num}th`;
  }

  switch (j) {
    case 1:
      return `${num}st`;
    case 2:
      return `${num}nd`;
    case 3:
      return `${num}rd`;
    default:
      return `${num}th`;
  }
}
