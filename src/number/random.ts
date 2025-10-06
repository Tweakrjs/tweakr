export function random(min: number, max: number, integer = false): number {
  const value = Math.random() * (max - min) + min;
  return integer ? Math.floor(value) : value;
}
