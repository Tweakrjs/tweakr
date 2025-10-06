export async function reduceAsync<T, R>(
  arr: T[],
  fn: (acc: R, val: T, index: number, array: T[]) => Promise<R>,
  initial: R
): Promise<R> {
  let acc = initial;
  for (let i = 0; i < arr.length; i++) {
    acc = await fn(acc, arr[i], i, arr);
  }
  return acc;
}
