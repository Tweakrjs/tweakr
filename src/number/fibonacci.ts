const memoCache: Record<string, number> = {};

export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Fibonacci not defined for negative numbers");
  if (n === 0) return 0;
  if (n === 1) return 1;

  if (memoCache[`fib_${n}`] !== undefined) return memoCache[`fib_${n}`];

  const result = fibonacci(n - 1) + fibonacci(n - 2);
  memoCache[`fib_${n}`] = result;
  return result;
}
