export function debounceAsync<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  delay: number
) {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let lastCall: Promise<ReturnType<T>> | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);

    lastCall = new Promise((resolve, reject) => {
      timeout = setTimeout(() => {
        fn(...args)
          .then(resolve)
          .catch(reject);
      }, delay);
    });

    return lastCall;
  };
}
