/**
 * Returns a promise that resolves after a specified delay in milliseconds.
 *
 * Useful for delaying execution in async workflows, testing, or simulating latency.
 *
 * @example
 * ```ts
 * console.log("Start");
 * await sleep(1000); // wait 1 second
 * console.log("End");
 * ```
 *
 * @param ms - The number of milliseconds to sleep.
 * @returns A promise that resolves after the specified delay.
 *
 * @group Async
 * @since 1.1.0
 */
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
