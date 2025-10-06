export function after(n: number, fn: (...args: any[]) => any) {
  let count = 0;
  let called = false;
  return (...args: any[]) => {
    count++;
    if (count >= n && !called) {
      called = true;
      return fn(...args);
    }
    return undefined;
  };
}
