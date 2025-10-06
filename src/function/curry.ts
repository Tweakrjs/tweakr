export function curry(fn: Function, arity = fn.length): any {
  return (...args: any[]) =>
    args.length >= arity
      ? fn(...args)
      : curry(fn.bind(null, ...args), arity - args.length);
}
