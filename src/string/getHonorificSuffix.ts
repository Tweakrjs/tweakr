import { HONORIFIC_SUFFIXES } from "../internal/honorificSuffixes";

const HONORIFIC_SUFFIXES_SORTED = [...HONORIFIC_SUFFIXES].sort(
  (a, b) => b.length - a.length
);

export function getHonorificSuffix(str: string): string | null {
  const trimmed = str.trim();

  for (const suffix of HONORIFIC_SUFFIXES_SORTED) {
    if (trimmed.endsWith(" " + suffix) || trimmed.endsWith(suffix)) {
      return suffix;
    }
  }

  return null;
}
