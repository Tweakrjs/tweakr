export function interpolate(str: string, vars: Record<string, any>): string {
  return str.replace(/\{(\w+)\}/g, (_, key) =>
    key in vars ? String(vars[key]) : `{${key}}`
  );
}
