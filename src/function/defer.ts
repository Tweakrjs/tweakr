export function defer(fn: Function) {
  Promise.resolve().then(() => fn());
}
