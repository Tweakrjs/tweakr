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
