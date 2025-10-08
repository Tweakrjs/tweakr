# Tweakr Release Notes

**Site:** [https://tweakrjs.github.io/tweakr/](https://tweakrjs.github.io/tweakr/)

## v1.2.x – 2025-10-08

**🔥 New in v1.2.x:**

- Added **50 new functions** across Array, Object, String, Number, and Function/Misc utilities.

**Array Utilities (15)**

- `union`, `unionBy`, `intersectionBy`, `differenceBy`, `compactBy`, `zip`, `zipWith`, `unzip`,
  `flattenDepth`, `chunkWhile`, `removeIndex`, `take`, `takeRight`, `dropWhile`, `takeWhile`

**Object Utilities (12)**

- `pickBy`, `omitBy`, `mapKeysDeep`, `mapValuesDeep`, `invertBy`, `has`, `unset`, `mergeAll`,
  `assignDeep`, `pickDeep`, `omitDeep`, `getOrDefault`

**String Utilities (6)**

- `removeNumbers`, `truncateWords`, `replaceVowels`, `reverseWordsAdvanced`,
  `snakeToCamel`, `camelToKebab`

**Number Utilities (5)**

- `randomInt`, `randomFloat`, `clampBigInt`, `factorialBigInt`, `isEvenBigInt`

**Function / Misc Utilities (12)**

- `tap`, `wrapDeep`, `afterAsync`, `beforeAsync`, `curryN`, `composeN`, `pipeN`,
  `memoizeN`, `onceNAsync`, `noopAsync`, `identityAsync`, `retryAsync`

**Other Improvements / Fixes**

- Optimized v1.1 functions for **performance, TypeScript typings, edge cases, and async readiness**
- Array: `flatten` / `flattenDeep`, `unique`, `groupBy`
- Async: `debounceAsync`, `queue`, `parallelLimit`, `waitFor`, `retryBackoff`, `asyncCompose`, `asyncPipe`
- Function: `memoize`, `memoizeAsync`, `tryCatch`, `curry`, `partial`, `once`, `after`, `before`
- Number: `fibonacci`, `factorial`, `toFixedNumber`, `toPercentage`, `lerp`, `toDegrees`, `toRadians`
- Object: `deepEqual`, `cloneDeep`, `deepMerge`, `filterKeys`, `filterValues`, `mapValues`
- Browser: `scrollToTop`, `scrollToBottom`, `focusElement`, clipboard & cookie helpers
- String: v1.1 functions verified and Unicode/HTML/accents edge cases fixed
- Utilities: `deepFreeze`, `isEmpty`, `identityAsync`, `noopAsync`

---

## v1.1.x – 2025-10-07

**🔥 New in v1.1.x:**

- `groupBy` – Group array elements by a key or callback, safely handling `undefined`/`null` keys.
- New string helpers:

  - `endsWith`, `honorific`, `includes`, `removePrefix`, `removeSuffix`,
    `replaceAll`, `startsWith`, `trimAll`, `collapseWhitespace`, `ordinalSuffix` `removeHonorificSuffix`,
    `getHonorificSuffix`,

**Other Improvements:**

- Array: `flatten` / `flattenDeep`, `unique`, TypeScript generics improved
- Async: `waitFor`, `debounceAsync`, `queue`, `parallelLimit`, `retryBackoff`, `asyncCompose`, `asyncPipe`
- Function: `memoize`, `memoizeAsync`, `tryCatch`, `curry`, `partial`
- Number: `fibonacci`, `factorial`, `toFixedNumber`, `toPercentage`, `lerp`, `toDegrees`, `toRadians`
- Object: `deepClone`, `deepMerge`, `filterKeys`, `filterValues`, `mapValues`
- Browser: `scrollToTop`, `scrollToBottom`, `focusElement`, clipboard & cookie helpers
- String: migrated from `lang/` to `string/`; full TypeScript typings
- Utilities: improved Vitest coverage, optimized UMD/ESM builds

---

## v1.0.0 – 2025-10-06

- Initial release: **153 utility functions** across array, async, function, string (lang), number, object, browser, and misc helpers
- Fully modular, TypeScript-ready, tree-shakable, with minified UMD for browser usage

---

## Quick Usage Examples

### `groupBy` (v1.1+)

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

### New String Utilities (v1.1+)

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
  snakeToCamel,
  camelToKebab,
} from "tweakr";

console.log(endsWith("Hello World", "World")); // true
console.log(removePrefix("unhappy", "un")); // "happy"
console.log(removeSuffix("running", "ing")); // "run"
console.log(replaceAll("foo bar foo", "foo", "baz")); // "baz bar baz"
console.log(startsWith("OpenAI", "Open")); // true
console.log(trimAll("   spaced out   ")); // "spaced out"
console.log(collapseWhitespace("This   is   spaced")); // "This is spaced"
console.log(ordinalSuffix(1)); // "1st"
console.log(snakeToCamel("hello_world")); // "helloWorld"
console.log(camelToKebab("helloWorld")); // "hello-world"
```
