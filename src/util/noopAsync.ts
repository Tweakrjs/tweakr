/**
 * A no-operation async function that does nothing and resolves immediately.
 *
 * This can be used as a placeholder for async callbacks or default async functions.
 *
 * @group Util
 * @since 1.1.0
 *
 * @returns A promise that resolves to `void`.
 *
 * @example
 * ```ts
 * await noopAsync(); // does nothing
 * ```
 */
export async function noopAsync(): Promise<void> {
  return;
}
