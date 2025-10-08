import { HONORIFIC_SUFFIXES } from "../internal/honorificSuffixes";

// Sort suffixes by length descending to match longest first
const HONORIFIC_SUFFIXES_SORTED = [...HONORIFIC_SUFFIXES].sort(
  (a, b) => b.length - a.length
);

export function removeHonorificSuffix(str: string): string {
  const trimmed = str.trim();

  for (const suffix of HONORIFIC_SUFFIXES_SORTED) {
    if (trimmed.endsWith(" " + suffix) || trimmed.endsWith(suffix)) {
      return trimmed.slice(0, trimmed.length - suffix.length).trim();
    }
  }

  return trimmed;
}
