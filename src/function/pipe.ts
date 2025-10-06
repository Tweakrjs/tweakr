export function pipe(...fns: Function[]) {
  return (x: any) => fns.reduce((v, f) => f(v), x);
}
