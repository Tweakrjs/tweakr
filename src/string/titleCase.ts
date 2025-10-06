export function titleCase(str: string): string {
  return str.replace(
    /\w\S*/g,
    (txt) => txt[0].toUpperCase() + txt.slice(1).toLowerCase()
  );
}
