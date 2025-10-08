/**
 * Creates a curried version of a function that supports rest parameters.
 *
 * Works for both fixed-arity and variadic (rest) functions.
 *
 * @example
 * const add = curry((a: number, b: number, c: number) => a + b + c);
 * add(1)(2)(3); // 6
 * add(1, 2)(3); // 6
 * add(1)(2, 3); // 6
 *
 * const join = curry((a: string, b: string, ...rest: string[]) => [a, b, ...rest].join("-"));
 * join("a")("b")("c", "d"); // "a-b-c-d"
 *
 * @group Function
 * @since 1.2.0
 */
export function curry<T extends (...args: any[]) => any>(fn: T): any {
  const isVariadic = fn.toString().includes("...");

  const curried = (...args: any[]): any => {
    return (...next: any[]): any => {
      const allArgs = [...args, ...next];

      if (!isVariadic && allArgs.length >= fn.length) {
        return fn(...allArgs);
      }

      if (isVariadic && next.length > 1) {
        return fn(...allArgs);
      }

      return curried(...allArgs);
    };
  };

  return (...args: any[]) => {
    if (isVariadic && args.length > 1) {
      return fn(...args);
    }

    if (!isVariadic && args.length >= fn.length) {
      return fn(...args);
    }
    return curried(...args);
  };
}
