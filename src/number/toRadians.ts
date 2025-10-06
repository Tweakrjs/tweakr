export function toRadians(degrees: number): number {
  if (!Number.isFinite(degrees))
    throw new Error("toRadians: degrees must be a finite number");
  return degrees * (Math.PI / 180);
}
