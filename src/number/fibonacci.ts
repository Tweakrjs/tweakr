export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Fibonacci not defined for negative numbers");
  if (n === 0) return 0;
  if (n === 1) return 1;
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}
