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
