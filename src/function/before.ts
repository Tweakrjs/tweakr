export function before(n: number, fn: (...args: any[]) => any) {
  let count = 0;
  return (...args: any[]) => (++count < n ? fn(...args) : undefined);
}
