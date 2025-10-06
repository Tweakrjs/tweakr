export function throttleAsync<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  interval: number
) {
  let lastTime = 0;
  let pending: Promise<any> | null = null;

  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      pending = fn(...args);
    }
    return pending!;
  };
}
