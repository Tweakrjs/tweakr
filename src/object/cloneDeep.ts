export function cloneDeep<T>(obj: T, hash = new WeakMap()): T {
  if (obj === null || typeof obj !== "object") return obj;

  if (hash.has(obj)) return hash.get(obj);

  // Handle special object types
  if (obj instanceof Date) return new Date(obj.getTime()) as any;
  if (obj instanceof RegExp) return new RegExp(obj) as any;
  if (obj instanceof Map)
    return new Map(
      Array.from(obj.entries()).map(([k, v]) => [k, cloneDeep(v, hash)])
    ) as any;
  if (obj instanceof Set)
    return new Set(
      Array.from(obj.values()).map((v) => cloneDeep(v, hash))
    ) as any;

  if (Array.isArray(obj)) {
    const arr: any = [];
    hash.set(obj, arr);
    for (let i = 0; i < obj.length; i++) {
      arr[i] = cloneDeep(obj[i], hash);
    }
    return arr as any;
  }

  const result: any = {};
  hash.set(obj, result);
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = cloneDeep((obj as any)[key], hash);
    }
  }
  return result;
}
