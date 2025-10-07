const HONORIFIC_SUFFIXES = [
  "Jr.",
  "Sr.",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
];

// Sort suffixes by length descending to match longest first
const HONORIFIC_SUFFIXES_SORTED = [...HONORIFIC_SUFFIXES].sort(
  (a, b) => b.length - a.length
);

/**
 * Removes a recognized honorific suffix from a string if present.
 *
 * @param str - The string to remove the suffix from.
 * @returns The string without the honorific suffix.
 *
 * @category String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * removeHonorificSuffix("John Doe Jr.");
 * // Returns: "John Doe"
 *
 * removeHonorificSuffix("Jane Smith IV");
 * // Returns: "Jane Smith"
 * ```
 */
export function removeHonorificSuffix(str: string): string {
  for (const suffix of HONORIFIC_SUFFIXES_SORTED) {
    if (str.endsWith(" " + suffix)) {
      return str.slice(0, -suffix.length - 1);
    }
    if (str.endsWith(suffix)) {
      return str.slice(0, -suffix.length);
    }
  }
  return str;
}

/**
 * Returns the honorific suffix from a string if present, otherwise null.
 *
 * @param str - The string to check for an honorific suffix.
 * @returns The honorific suffix if found, otherwise `null`.
 *
 * @example
 * ```ts
 * getHonorificSuffix("John Doe Jr.");
 * // Returns: "Jr."
 *
 * getHonorificSuffix("Jane Smith");
 * // Returns: null
 * ```
 */
export function getHonorificSuffix(str: string): string | null {
  for (const suffix of HONORIFIC_SUFFIXES_SORTED) {
    if (str.endsWith(" " + suffix) || str.endsWith(suffix)) {
      return suffix;
    }
  }
  return null;
}
