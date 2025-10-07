/**
 * Returns the given value unchanged.
 *
 * This is a simple utility function that can be useful in functional programming
 * contexts or when a placeholder function is needed.
 *
 * @category Util
 * @since 1.1.0
 *
 * @template T - The type of the input value.
 *
 * @param value - The value to return.
 * @returns The same value that was passed in.
 *
 * @example
 * ```ts
 * const result = identity(42);      // 42
 * const obj = { a: 1 };
 * const sameObj = identity(obj);    // { a: 1 }
 * ```
 */
export function identity<T>(value: T): T {
  return value;
}
