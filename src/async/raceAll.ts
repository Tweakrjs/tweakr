/**
 * Runs multiple async tasks concurrently and resolves/rejects
 * with the result of the first task that settles.
 *
 * This is a thin wrapper around `Promise.race` for arrays of async task functions.
 *
 * @example
 * ```ts
 * const result = await raceAll([
 *   () => fetch("/api/slow"),
 *   () => fetch("/api/fast")
 * ]);
 * // Resolves as soon as the faster fetch completes
 * ```
 *
 * @param tasks - An array of functions returning promises.
 * @returns A promise that resolves or rejects with the first task to settle.
 *
 * @group Async
 * @since 1.1.0
 */
export function raceAll<T>(tasks: (() => Promise<T>)[]): Promise<T> {
  return Promise.race(tasks.map((fn) => fn()));
}
