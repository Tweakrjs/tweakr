export function onceAsync<T extends (...args: any[]) => Promise<any>>(fn: T) {
  let result: Promise<ReturnType<T>> | null = null;
  return (...args: Parameters<T>): Promise<ReturnType<T>> => {
    if (!result) result = fn(...args);
    return result;
  };
}
