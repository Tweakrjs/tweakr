export function timeout<T>(
  promise: Promise<T>,
  ms: number,
  message = "Timeout"
) {
  let timer: NodeJS.Timeout;
  return Promise.race([
    promise.finally(() => clearTimeout(timer)),
    new Promise<T>(
      (_, reject) => (timer = setTimeout(() => reject(new Error(message)), ms))
    ),
  ]);
}
