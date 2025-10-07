/**
 * Invokes the provided function with the given value, then returns the original value.
 *
 * @example
 * const result = tap(5, x => console.log(x)); // logs 5, returns 5
 *
 * @param value - The value to pass through the function.
 * @param fn - Function to be invoked with the value.
 * @returns The original value.
 *
 * @group Function
 * @since 1.2.0
 */
export function tap<T>(value: T, fn: (val: T) => void): T {
  fn(value);
  return value;
}
