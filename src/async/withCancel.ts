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
