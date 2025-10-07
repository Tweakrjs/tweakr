/**
 * Returns a promise that resolves after a specified number of milliseconds.
 *
 * @example
 * ```ts
 * await delay(1000); // pauses for 1 second
 * console.log("1 second later");
 * ```
 *
 * @param ms - The number of milliseconds to delay.
 * @returns A promise that resolves after the delay.
 *
 * @group Function
 * @since 1.1.0
 */
export function delay(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}
