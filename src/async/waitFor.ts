export interface WaitForOptions {
  /** Delay between polls in ms or a function returning next delay */
  interval?: number | (() => number);
  /** Maximum time to wait before throwing */
  timeoutMs?: number;
}

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
