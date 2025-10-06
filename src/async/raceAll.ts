export function raceAll<T>(tasks: (() => Promise<T>)[]): Promise<T> {
  return Promise.race(tasks.map((fn) => fn()));
}
