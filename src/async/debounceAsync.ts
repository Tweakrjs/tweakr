export function debounceAsync<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  delay: number
) {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let lastPromise: {
    promise: Promise<ReturnType<T>>;
    resolve: (value: ReturnType<T>) => void;
    reject: (reason?: any) => void;
  } | null = null;

  const wrapper = (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);

    if (lastPromise) {
      lastPromise?.reject(new Error("Cancelled due to debounce"));
    }

    let resolveFn: (value: ReturnType<T>) => void;
    let rejectFn: (reason?: any) => void;

    const promise = new Promise<ReturnType<T>>((resolve, reject) => {
      resolveFn = resolve;
      rejectFn = reject;
    });

    lastPromise = { promise, resolve: resolveFn!, reject: rejectFn! };

    timeout = setTimeout(async () => {
      try {
        const result = await fn(...args);
        lastPromise?.resolve(result);
      } catch (err) {
        lastPromise?.reject(err);
      } finally {
        lastPromise = null;
      }
    }, delay);

    return promise;
  };

  wrapper.cancel = () => {
    if (timeout) clearTimeout(timeout);
    lastPromise?.reject(new Error("Cancelled manually"));
    lastPromise = null;
  };

  return wrapper;
}
