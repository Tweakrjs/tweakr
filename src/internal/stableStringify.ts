/**
 * Deterministically serializes any JavaScript value into a string.
 *
 * Used internally by memoization utilities to create stable cache keys
 * for deep object structures where key order may vary.
 *
 * @param obj - The value to serialize.
 * @returns A deterministic string representation of the input.
 *
 * @example
 * ```ts
 * stableStringify({ b: 2, a: 1 }); // "{a:1,b:2}"
 * stableStringify([1, { x: 2 }]); // "[1,{x:2}]"
 * ```
 *
 * @internal
 * @since 1.2.0
 */
export function stableStringify(obj: any): string {
  if (obj === null) return "null";
  if (typeof obj !== "object") return String(obj);
  if (Array.isArray(obj)) return `[${obj.map(stableStringify).join(",")}]`;
  const keys = Object.keys(obj).sort();
  return `{${keys.map((k) => `${k}:${stableStringify(obj[k])}`).join(",")}}`;
}
