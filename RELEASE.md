# Tweakr Release Notes

**Site:** [https://tweakrjs.github.io/tweakr/](https://tweakrjs.github.io/tweakr/)

## v1.1.x – 2025-10-07

**🔥 New in v1.1.x:**

- **`groupBy`** – Newly added! Group array elements by a key or callback, safely handling `undefined`/`null` keys.

**Other Improvements:**

### Array Utilities

- Optimized `flatten` and `flattenDeep` for large arrays
- `unique` now handles numbers, strings, and objects more efficiently
- TypeScript generics improved for better inference

### Async Utilities

- `waitFor` now supports flexible polling intervals and enhanced type safety
- Optimized `debounceAsync`, `queue`, and `parallelLimit` for performance
- `retryBackoff` behavior now more predictable
- `asyncCompose` and `asyncPipe` optimized for faster execution

### Function Utilities

- `memoize` and `memoizeAsync` handle deep objects properly
- Improved error handling in `tryCatch`
- TypeScript improvements for `curry`, `partial`, and other higher-order functions

### Number Utilities

- Optimized `fibonacci` and `factorial` using memoization
- Improved precision handling in `toFixedNumber` and `toPercentage`
- Enhanced type safety for `lerp`, `toDegrees`, `toRadians`

### Object Utilities

- Renamed `deepClone` → `cloneDeep` internally
- Optimized `cloneDeep` and `deepMerge` for large objects
- TypeScript typings and usability improvements for `filterKeys`, `filterValues`, and `mapValues`

### Browser Utilities

- Performance improvements for `scrollToTop`, `scrollToBottom`, `focusElement`
- Clipboard helpers (`copyToClipboard`, `readFromClipboard`) now fully async-safe
- Refined cookie helpers (`getCookie`, `setCookie`, `deleteCookie`)
- Updated TypeScript types and generics

### String Utilities

- All previous `lang/` functions fully migrated to `string/`
- **New String Utilities v1.1.x:**

  - `endsWith`
  - `honorific` (suffix-aware)
  - `includes`
  - `removePrefix`
  - `removeSuffix`
  - `replaceAll`
  - `startsWith`
  - `trimAll`
  - `collapseWhitespace`
  - `ordinalSuffix`

- Full TypeScript typings for all string helpers

### General Improvements

- Updated documentation and usage examples for all functions
- Ensured full Vitest coverage, including async edge cases
- Optimized minified UMD and ESM builds for tree-shaking and bundle size

---

## Quick Usage Examples

### `groupBy`

```ts
import { flatten } from "tweakr/array";
import { retry } from "tweakr/async";
```

- Full Vitest coverage ensures correct behavior for async, nested, and edge-case inputs.
- Each version is fully additive, maintaining backward compatibility.

---

## Quick Usage Examples (v1.0 → v1.2)

### Array Utilities

```ts
import { flatten, unique, union, chunkWhile, groupBy } from "tweakr";

console.log(flatten([1, [2, [3]]])); // [1, 2, [3]]
console.log(unique([1, 2, 2, 3])); // [1, 2, 3]
console.log(union([1, 2], [2, 3])); // [1,2,3]

const people = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Carol", role: "admin" },
];
console.log(groupBy(people, (p) => p.role));
// { admin: [...], user: [...] }
```

### Object Utilities

```ts
import { pickBy, omitBy, mapValuesDeep, mergeAll, getOrDefault } from "tweakr";

console.log(pickBy({ a: 1, b: 2, c: 3 }, (v) => v > 1)); // { b:2, c:3 }
console.log(omitBy({ a: 1, b: 2, c: 3 }, (v) => v < 3)); // { c:3 }
console.log(mapValuesDeep({ a: { x: 1 }, b: { y: 2 } }, (v) => v * 2)); // { a:{x:2}, b:{y:4} }
console.log(mergeAll([{ a: 1 }, { b: 2 }, { a: 3 }])); // {a:3, b:2}
console.log(getOrDefault({ a: 1 }, "d", 99)); // 99
```

### New String Utilities v1.1.x

```ts
import {
  endsWith,
  removeHonorificSuffix,
  getHonorificSuffix,
  includes,
  removePrefix,
  removeSuffix,
  replaceAll,
  startsWith,
  trimAll,
  collapseWhitespace,
  ordinalSuffix,
} from "tweakr";

console.log(endsWith("Hello World", "World")); // true

// Honorific suffix handling
console.log(removeHonorificSuffix("John Doe Jr.")); // "John Doe"
console.log(removeHonorificSuffix("Jane Smith IV")); // "Jane Smith"
console.log(getHonorificSuffix("John Doe Jr.")); // "Jr."
console.log(getHonorificSuffix("Jane Smith")); // null

console.log(includes("TypeScript", "Script")); // true
console.log(removePrefix("unhappy", "un")); // "happy"
console.log(removeSuffix("running", "ing")); // "run"
console.log(replaceAll("foo bar foo", "foo", "baz")); // "baz bar baz"
console.log(startsWith("OpenAI", "Open")); // true
console.log(trimAll("   spaced out   ")); // "spaced out"
console.log(collapseWhitespace("This   is   spaced")); // "This is spaced"
console.log(ordinalSuffix(1)); // "1st"
console.log(ordinalSuffix(22)); // "22nd"
console.log(ordinalSuffix(103)); // "103rd"
```

---

## Previous Version

### v1.0.0 – 2025-10-06

- Initial release: 153 utility functions across **array, async, function, string, number, object, browser, and misc helpers**
- Fully modular, TypeScript-ready, tree-shakable, with minified UMD for browser usage
