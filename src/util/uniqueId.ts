let idCounter = 0;

/**
 * Generates a unique string ID, optionally with a prefix.
 * @param prefix - Optional string to prefix the ID
 * @returns Unique string ID
 */
export function uniqueId(prefix = ""): string {
  idCounter += 1;
  return `${prefix}${idCounter}`;
}
