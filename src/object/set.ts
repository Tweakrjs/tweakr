export function set(obj: any, path: string, value: any): void {
  if (!path) return;
  const keys = path.split(".");
  let current = obj;
  keys.forEach((key, index) => {
    if (index === keys.length - 1) {
      current[key] = value;
    } else {
      if (!current[key] || typeof current[key] !== "object") current[key] = {};
      current = current[key];
    }
  });
}
