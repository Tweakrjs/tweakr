export function values<T extends object>(obj: T): T[keyof T][] {
  return Object.values(obj);
}
