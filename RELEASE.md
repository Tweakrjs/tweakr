# Tweakr Updates

**Site:** [https://tweakrjs.github.io/tweakr/](https://tweakrjs.github.io/tweakr/)

## v1.1.0 – 2025-10-07

**🔥 New in v1.1.0:**

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
- Added new string helpers: `replaceAll`, `startsWith`, `endsWith`, `padLeft`, `padRight`, etc.
- Full TypeScript typings for all string helpers

### General Improvements

- Updated documentation and usage examples for all functions
- Ensured full Vitest coverage, including async edge cases
- Optimized minified UMD and ESM builds for tree-shaking and bundle size

---

**Quick Usage Example for the New `groupBy`:**

```ts
import { groupBy } from "tweakr";

const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Carol", role: "admin" },
];

console.log(groupBy(users, (u) => u.role));
// {
//   admin: [{ name: 'Alice', role: 'admin' }, { name: 'Carol', role: 'admin' }],
//   user: [{ name: 'Bob', role: 'user' }]
// }
```

---

## Previous Version

### v1.0.0 – 2025-10-06

- Initial release: 153 utility functions across **array, async, function, string, number, object, browser, and misc helpers**
- Fully modular, TypeScript-ready, tree-shakable, with minified UMD for browser usage
