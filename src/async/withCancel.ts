/**
 * Wraps a promise with a cancelable interface.
 *
 * The returned object contains a `promise` and a `cancel` method.
 * If `cancel` is called before the promise settles, the promise rejects with a "Cancelled" error.
 *
 * @example
 * ```ts
 * const { promise, cancel } = withCancel(fetch("/api/data"));
 *
 * setTimeout(() => cancel(), 100); // cancel after 100ms
 *
 * promise.catch(err => console.log(err.message)); // "Cancelled"
 * ```
 *
 * @template T - The type of the promise’s resolved value.
 * @param promise - The promise to wrap with cancellation capability.
 * @returns An object with the wrapped `promise` and a `cancel` function.
 *
 * @category Async
 * @since 1.1.0
 */
export function withCancel<T>(promise: Promise<T>) {
  let canceled = false;
  const wrapped = new Promise<T>((resolve, reject) => {
    promise.then(
      (val) => (canceled ? reject(new Error("Cancelled")) : resolve(val)),
      (err) => reject(err)
    );
  });
  return {
    promise: wrapped,
    cancel: () => (canceled = true),
  };
}
