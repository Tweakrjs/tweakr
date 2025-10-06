export function compose(...fns: Function[]) {
  return (x: any) => fns.reduceRight((v, f) => f(v), x);
}
