/**
 * Wraps a function in a try-catch block and provides a fallback function
 * in case of errors.
 *
 * @example
 * ```ts
 * const risky = () => JSON.parse("invalid json");
 * const safe = tryCatch(risky, (err) => ({ error: err }));
 * console.log(safe()); // { error: SyntaxError: ... }
 * ```
 *
 * @param fn - The function to execute.
 * @param fallback - Function to execute if `fn` throws, receives the error.
 * @param options - Optional settings:
 *   - log: whether to log the error to the console.
 * @returns A function that executes `fn` safely with fallback.
 *
 * @category Function
 * @since 1.1.0
 */
export function tryCatch<T>(
  fn: () => T,
  fallback: (error?: unknown) => T,
  options?: { log?: boolean }
) {
  return () => {
    try {
      return fn();
    } catch (error) {
      if (options?.log) {
        console.error("tryCatch caught error:", error);
      }
      return fallback(error);
    }
  };
}
