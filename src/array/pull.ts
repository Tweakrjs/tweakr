export function pull<T>(array: T[], ...values: T[]): T[] {
  return array.filter((item) => !values.includes(item));
}
