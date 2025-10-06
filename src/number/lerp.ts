export function lerp(start: number, end: number, t: number): number {
  if (!Number.isFinite(start) || !Number.isFinite(end) || !Number.isFinite(t)) {
    throw new Error("lerp: all arguments must be finite numbers");
  }
  return start + t * (end - start);
}
