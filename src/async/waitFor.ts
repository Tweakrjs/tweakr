/**
 * Options for the `waitFor` function.
 */
export interface WaitForOptions {
  /**
   * Delay between condition checks in milliseconds, or a function returning the next delay.
   * Defaults to `100`.
   */
  interval?: number | (() => number);

  /**
   * Maximum time to wait before throwing an error, in milliseconds.
   * Defaults to `5000`.
   */
  timeoutMs?: number;
}

/**
 * Waits for a condition function to return `true` or a promise that resolves to `true`.
 *
 * Polls the condition at a specified interval until it returns `true` or
 * the timeout is reached, in which case an error is thrown.
 *
 * @example
 * ```ts
 * let ready = false;
 * setTimeout(() => { ready = true }, 500);
 *
 * await waitFor(() => ready, { interval: 100, timeoutMs: 1000 });
 * console.log("Condition met");
 * ```
 *
 * @param condition - A function returning a boolean or a promise that resolves to boolean.
 * @param options - Optional configuration for polling interval and timeout.
 * @returns A promise that resolves when the condition becomes true.
 *
 * @throws Will throw an error if the condition is not met within the timeout.
 *
 * @category Async
 * @since 1.1.0
 */
export async function waitFor(
  condition: () => boolean | Promise<boolean>,
  options: WaitForOptions = {}
): Promise<void> {
  const { interval = 100, timeoutMs = 5000 } = options;
  const start = Date.now();

  while (true) {
    const result = await condition();
    if (result) return;

    if (Date.now() - start > timeoutMs) {
      throw new Error("Timeout waiting for condition");
    }

    const waitTime = typeof interval === "function" ? interval() : interval;
    await new Promise((r) => setTimeout(r, waitTime));
  }
}
