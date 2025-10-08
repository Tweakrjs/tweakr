import { HONORIFIC_SUFFIXES } from "../internal/honorificSuffixes";

// Sort suffixes by length descending to match longest first
const HONORIFIC_SUFFIXES_SORTED = [...HONORIFIC_SUFFIXES].sort(
  (a, b) => b.length - a.length
);

/**
 * Removes any known honorific suffix from the end of a string.
 *
 * This function checks the input string for honorific suffixes
 * (e.g., "Jr.", "Sr.", "III") and removes the first match found.
 * The input string is trimmed before processing, and the result is
 * also trimmed.
 *
 * @param {string} str - The string to remove the honorific suffix from.
 * @returns {string} The string without the honorific suffix.
 * @group String
 * @since 1.2.0
 *
 * @example
 * removeHonorificSuffix("John Doe Jr."); // Returns "John Doe"
 * removeHonorificSuffix("Jane Smith");   // Returns "Jane Smith"
 */
export function removeHonorificSuffix(str: string): string {
  const trimmed = str.trim();

  for (const suffix of HONORIFIC_SUFFIXES_SORTED) {
    if (trimmed.endsWith(" " + suffix) || trimmed.endsWith(suffix)) {
      return trimmed.slice(0, trimmed.length - suffix.length).trim();
    }
  }

  return trimmed;
}
