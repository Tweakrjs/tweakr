let idCounter = 0;

/**
 * Generates a unique string ID with an optional prefix.
 *
 * Each call increments an internal counter to ensure uniqueness within the runtime.
 *
 * @group Util
 * @since 1.1.0
 *
 * @param prefix - An optional string to prepend to the generated ID. Default is an empty string.
 * @returns A unique string ID.
 *
 * @example
 * ```ts
 * uniqueId();         // "1"
 * uniqueId("item_");  // "item_2"
 * uniqueId("item_");  // "item_3"
 * ```
 */
export function uniqueId(prefix = ""): string {
  idCounter += 1;
  return `${prefix}${idCounter}`;
}
