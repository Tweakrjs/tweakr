export function partial(fn: Function, ...presetArgs: any[]) {
  return (...laterArgs: any[]) => fn(...presetArgs, ...laterArgs);
}
