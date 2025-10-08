import { HONORIFIC_SUFFIXES } from "../internal/honorificSuffixes";

const HONORIFIC_SUFFIXES_SORTED = [...HONORIFIC_SUFFIXES].sort(
  (a, b) => b.length - a.length
);

/**
 * Returns the honorific suffix from a string if present.
 *
 * This function checks the input string for any known honorific suffixes
 * (e.g., "Jr.", "Sr.", "III") and returns the first match found. It trims
 * the input string before checking and considers suffixes both with and
 * without a leading space.
 *
 * @param {string} str - The string to search for an honorific suffix.
 * @returns {string | null} The matched honorific suffix, or `null` if none is found.
 * @group String
 * @since 1.2.0
 *
 * @example
 * getHonorificSuffix("John Doe Jr."); // Returns "Jr."
 * getHonorificSuffix("Jane Smith");    // Returns null
 */
export function getHonorificSuffix(str: string): string | null {
  const trimmed = str.trim();

  for (const suffix of HONORIFIC_SUFFIXES_SORTED) {
    if (trimmed.endsWith(" " + suffix) || trimmed.endsWith(suffix)) {
      return suffix;
    }
  }

  return null;
}
