const memoCache: Record<string, number> = {};

export function factorial(n: number): number {
  if (n < 0) throw new Error("Factorial not defined for negative numbers");
  if (n === 0) return 1;

  if (memoCache[`fact_${n}`] !== undefined) return memoCache[`fact_${n}`];

  const result = n * factorial(n - 1);
  memoCache[`fact_${n}`] = result;
  return result;
}
