/**
 * Returns the input value as-is.
 * @param value - Any value
 * @returns The same value
 */
export function identity<T>(value: T): T {
  return value;
}
