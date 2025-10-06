export async function waitFor(
  condition: () => boolean | Promise<boolean>,
  timeout = 2000,
  interval = 50
): Promise<boolean> {
  const start = Date.now();
  return new Promise((resolve) => {
    const check = async () => {
      const result = await condition();
      if (result) return resolve(true);
      if (Date.now() - start >= timeout) return resolve(false);
      setTimeout(check, interval);
    };
    check();
  });
}
