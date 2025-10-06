export function debouncePromise<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  wait: number
): T {
  let timeout: NodeJS.Timeout | null = null;
  let lastArgs: any;
  let lastPromise: Promise<any> | null = null;
  let resolveList: ((value: any) => void)[] = [];

  return ((...args: any[]) => {
    lastArgs = args;

    if (!lastPromise) {
      lastPromise = new Promise((resolve) => {
        resolveList.push(resolve);
      });
    } else {
      lastPromise = new Promise((resolve) => {
        resolveList.push(resolve);
      });
    }

    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(async () => {
      const result = await fn(...lastArgs);
      resolveList.forEach((r) => r(result));
      resolveList = [];
      lastPromise = null;
      timeout = null;
    }, wait);

    return lastPromise;
  }) as T;
}
