export async function waitFor(
  condition: () => boolean | Promise<boolean>,
  interval = 100,
  timeoutMs = 5000
): Promise<void> {
  const start = Date.now();
  while (!(await condition())) {
    if (Date.now() - start > timeoutMs)
      throw new Error("Timeout waiting for condition");
    await new Promise((r) => setTimeout(r, interval));
  }
}
