export function getUserLanguage(): string {
  return navigator.language || (navigator as any).userLanguage || "en";
}
