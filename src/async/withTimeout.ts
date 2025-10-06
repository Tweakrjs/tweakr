export function withTimeout<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  ms: number
) {
  return (...args: Parameters<T>): Promise<ReturnType<T>> =>
    Promise.race([
      fn(...args),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), ms)
      ),
    ]) as Promise<ReturnType<T>>;
}
