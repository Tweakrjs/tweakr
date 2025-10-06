export function tryCatch<T>(fn: () => T, fallback: () => T) {
  return () => {
    try {
      return fn();
    } catch {
      return fallback();
    }
  };
}
