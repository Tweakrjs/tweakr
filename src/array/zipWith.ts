/**
 * Like `zip`, but accepts a function to combine elements.
 *
 * @example
 * zipWith([1,2],[3,4], (a,b)=>a+b); // [4,6]
 *
 * @param arrays - Arrays to zip
 * @param fn - Combiner function
 * @returns Array of combined results
 *
 * @group Array
 * @since 1.2.0
 */
export function zipWith<T extends any[], R>(
  arrays: T[],
  fn: (...args: any[]) => R
): R[] {
  const maxLength = Math.max(...arrays.map((arr) => arr.length));
  return Array.from({ length: maxLength }, (_, i) =>
    fn(...arrays.map((arr) => arr[i]))
  );
}
