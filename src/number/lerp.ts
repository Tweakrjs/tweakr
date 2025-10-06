export function lerp(start: number, end: number, t: number): number {
  return start + t * (end - start);
}
