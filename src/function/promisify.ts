/**
 * Converts a Node.js-style callback function into a function that returns a Promise.
 *
 * @example
 * ```ts
 * const fs = require("fs");
 * const readFileAsync = promisify(fs.readFile);
 * readFileAsync("path/to/file.txt", "utf-8").then(console.log);
 * ```
 *
 * @param fn - A function that expects a callback as its last argument `(err, result)`.
 * @returns A function that returns a Promise resolving with the result or rejecting with the error.
 *
 * @group Function
 * @since 1.1.0
 */
export function promisify(fn: Function) {
  return (...args: any[]) =>
    new Promise((resolve, reject) =>
      fn(...args, (err: any, result: any) =>
        err ? reject(err) : resolve(result)
      )
    );
}
