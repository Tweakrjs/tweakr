/**
 * Safely executes a function and returns a fallback value or result
 * from a fallback function if an error is thrown.
 *
 * Supports both sync and async functions with typed fallbacks.
 *
 * @example
 * ```ts
 * const risky = () => JSON.parse("invalid");
 * const safe = tryCatch(risky, (err) => ({ error: String(err) }));
 * console.log(safe()); // { error: "SyntaxError: ..." }
 *
 * const asyncRisky = async () => { throw new Error("Oops"); };
 * const safeAsync = tryCatch(asyncRisky, (err) => ({ error: String(err) }));
 * console.log(await safeAsync()); // { error: "Error: Oops" }
 * ```
 *
 * @param fn - Function to execute (sync or async)
 * @param fallback - Fallback function executed when an error occurs
 * @param options - Optional configuration:
 *   - `log`: log errors to console (default: false)
 *   - `rethrow`: rethrow error after fallback (default: false)
 * @returns Wrapped function returning original result or fallback
 *
 * @group Function
 * @since 1.2.0
 */
export function tryCatch<T, F>(
  fn: (...args: any[]) => T | Promise<T>,
  fallback: (error?: unknown) => F | Promise<F>,
  options?: { log?: boolean; rethrow?: boolean }
): (...args: Parameters<typeof fn>) => Promise<T | F> {
  return async (...args: any[]) => {
    try {
      return await fn(...args);
    } catch (error) {
      if (options?.log) console.error("tryCatch caught error:", error);
      const fallbackValue = await fallback(error);
      if (options?.rethrow) throw error;
      return fallbackValue;
    }
  };
}
