export function toDegrees(radians: number): number {
  if (!Number.isFinite(radians))
    throw new Error("toDegrees: radians must be a finite number");
  return radians * (180 / Math.PI);
}
