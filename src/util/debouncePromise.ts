export function debouncePromise<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  wait: number
): (...args: Parameters<T>) => Promise<ReturnType<T>> {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let pendingResolvers: ((value: ReturnType<T>) => void)[] = [];
  let lastArgs: Parameters<T>;

  return (...args: Parameters<T>) => {
    lastArgs = args;

    const promise = new Promise<ReturnType<T>>((resolve) => {
      pendingResolvers.push(resolve);
    });

    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(async () => {
      const result = await fn(...lastArgs);
      pendingResolvers.forEach((r) => r(result));
      pendingResolvers = [];
      timeout = null;
    }, wait);

    return promise;
  };
}
