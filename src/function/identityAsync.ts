/**
 * Async identity function.
 *
 * @example
 * await identityAsync(5); // 5
 *
 * @param value - Value to return.
 * @returns Promise resolving to the value.
 *
 * @group Function
 * @since 1.2.0
 */
export async function identityAsync<T>(value: T): Promise<T> {
  return value;
}
