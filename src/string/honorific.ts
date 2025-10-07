// src/string/honorific.ts
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
 * Returns the honorific suffix if present, otherwise null
 */
export function getHonorificSuffix(str: string): string | null {
  for (const suffix of HONORIFIC_SUFFIXES_SORTED) {
    if (str.endsWith(" " + suffix) || str.endsWith(suffix)) {
      return suffix;
    }
  }
  return null;
}
