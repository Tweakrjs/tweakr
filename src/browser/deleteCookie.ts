export function deleteCookie(name: string, path = "/"): void {
  if (!name) return;
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}`;
}
