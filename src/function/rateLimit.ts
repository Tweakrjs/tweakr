export function rateLimit(fn: Function, interval = 1000) {
  let last = 0;
  return (...args: any[]) => {
    const now = Date.now();
    if (now - last >= interval) {
      last = now;
      return fn(...args);
    }
  };
}
