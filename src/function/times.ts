export function times(n: number, fn: (index: number) => void) {
  for (let i = 0; i < n; i++) fn(i);
}
