# Tweakr

![npm](https://img.shields.io/npm/v/tweakr) ![downloads](https://img.shields.io/npm/dw/tweakr) ![license](https://img.shields.io/npm/l/tweakr) [![release notes](https://img.shields.io/badge/Release-Notes-blue)](./RELEASE.md)

**Tweakr** is a modern, lightweight utility library for JavaScript and TypeScript. It provides **functional, async, array, number, object, string (lang), and browser helpers**, designed to be **modular, tree-shakable, and TypeScript-ready**.

💡 **See the latest releases:** [RELEASE.md](./RELEASE.md)  
🌐 **Docs / Site:** [https://tweakrjs.github.io/tweakr/](https://tweakrjs.github.io/tweakr/)

---

## ❓ Why “Tweakr”?

The name **Tweakr** was chosen because the library helps developers **“tweak” their code easily**.

- Every function is **small, modular, and composable** — just like making small tweaks.
- Designed for **efficiency, clarity, and flexibility** in modern JavaScript/TypeScript workflows.
- The name is short, memorable, and reflects the **utility-focused philosophy** behind the package.

---

## 📦 Features

- Functional helpers: `compose`, `pipe`, `debounce`, `throttle`, `memoize`, etc.
- Async utilities: `sleep`, `retry`, `timeout`, `waitFor`, etc.
- Array helpers: `flatten`, `chunk`, `unique`, `shuffle`, etc.
- Object helpers: `merge`, `pick`, `omit`, `deepClone`, `get`, `set`, etc.
- Number helpers: `clamp`, `random`, `sum`, `average`, `range`, etc.
- Browser helpers: `copyToClipboard`, `loadScript`, `loadStyle`, `debounceEvent`, `throttleEvent`, etc.
- Modular imports: per-folder, tree-shakable
- TypeScript typings for all utilities
- Minified UMD for browser global `Tweakr`
- Comprehensive Vitest coverage

---

## 💿 Installation

```bash
# Using npm
npm install tweakr

# Using yarn
yarn add tweakr

# Using pnpm
pnpm install tweakr
```

---

## 🚀 Sample Usage

### Array Utilities

```ts
import { flatten, uniq, chunk } from "tweakr/array";

console.log(flatten([1, [2, 3], 2])); // [1,2,3]
console.log(uniq([1, 2, 2, 3])); // [1,2,3]
console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1,2],[3,4],[5]]
```

### Async Utilities

```ts
import { sleep, retry, timeout } from "tweakr";

await sleep(500);

const result = await retry(
  async () => {
    if (Math.random() > 0.5) return "success";
    throw new Error("fail");
  },
  { attempts: 5 }
);

await timeout(Promise.resolve("done"), 1000);
```

### Function Utilities

```ts
import { debounce, throttle, memoize, compose } from "tweakr";

const log = (msg: string) => console.log(msg);
debounce(log, 200)("hello");

const add = (a: number, b: number) => a + b;
const double = (x: number) => x * 2;
console.log(compose(double, add)(2, 3)); // 10

const fib = memoize((n: number): number =>
  n <= 1 ? n : fib(n - 1) + fib(n - 2)
);
console.log(fib(10)); // 55
```

### Lang / String Utilities

```ts
import { camelCase, kebabCase, capitalize, truncate } from "tweakr";

console.log(camelCase("hello world")); // helloWorld
console.log(kebabCase("Hello World")); // hello-world
console.log(capitalize("tweakr")); // Tweakr
console.log(truncate("This is a long sentence", 10)); // This is a…
```

### Number Utilities

```ts
import { clamp, random, sum, range } from "tweakr";

console.log(clamp(10, 0, 5)); // 5
console.log(random(1, 10));
console.log(sum([1, 2, 3])); // 6
console.log(range(1, 5)); // [1,2,3,4,5]
```

### Object Utilities

```ts
import { deepClone, merge, pick, omit, get, set } from "tweakr";

const obj = { a: 1, b: { c: 2 } };
console.log(deepClone(obj));
console.log(merge({ a: 1 }, { b: 2 })); // {a:1,b:2}
console.log(pick(obj, ["a"])); // {a:1}
console.log(omit(obj, ["b"])); // {a:1}
console.log(get(obj, "b.c")); // 2
set(obj, "b.d", 3);
console.log(obj.b.d); // 3
```

### Browser Utilities

```ts
import { copyToClipboard, isOnline, loadScript } from "tweakr";

copyToClipboard("Hello Tweakr!");
console.log(isOnline());

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
).then(() => console.log("Lodash loaded!"));
```

### Per-folder Imports (Optional)

```ts
import { flatten } from "tweakr/array";
import { retry } from "tweakr/async";
import { memoize } from "tweakr/function";
```

---

## 🛠 Utility Helpers by Category

### 🟦 Array Helpers (30)

`chunk`, `compact`, `concat`, `difference`, `differenceBy`, `drop`, `dropRight`, `fill`, `flatten`, `flattenDeep`, `flattenDepth`, `head`, `initial`, `intersection`, `intersectionBy`, `join`, `shuffle`, `unique`, `union`, `unionBy`, `zip`, `zipWith`, `unzip`, `chunkWhile`, `removeIndex`, `take`, `takeRight`, `dropWhile`, `takeWhile`, `groupBy`

### ⏱ Async Helpers (22)

`asyncCompose`, `asyncPipe`, `debounceAsync`, `filterAsync`, `mapAsync`, `memoizeAsync`, `onceAsync`, `parallelLimit`, `queue`, `raceAll`, `reduceAsync`, `retry`, `retryBackoff`, `retryUntil`, `series`, `sleep`, `throttleAsync`, `timeout`, `waitFor`, `waterfall`, `withCancel`, `withTimeout`

### 🌐 Browser Helpers (20)

`copyToClipboard`, `deleteCookie`, `downloadFile`, `focusElement`, `getCookie`, `getDeviceType`, `getQueryParam`, `getScrollPosition`, `getThemePreference`, `getUserLanguage`, `isInViewport`, `isOnline`, `onVisibilityChange`, `readFromClipboard`, `removeQueryParam`, `scrollToBottom`, `scrollToTop`, `setCookie`, `setFavicon`, `setQueryParam`

### ⚙️ Function Helpers (34)

`after`, `asyncCompose`, `asyncPipe`, `before`, `compose`, `curry`, `debounce`, `defer`, `delay`, `memoize`, `noop`, `once`, `partial`, `pipe`, `promisify`, `rateLimit`, `throttle`, `times`, `tryCatch`, `unary`, `wrap`, `yieldToNext`, `tap`, `wrapDeep`, `afterAsync`, `beforeAsync`, `curryN`, `composeN`, `pipeN`, `memoizeN`, `onceNAsync`, `identityAsync`, `retryAsync`

### 🔤 String / Language Helpers (31)

`camelCase`, `containsIgnoreCase`, `capitalize`, `endsWithIgnoreCase`, `escapeHtml`, `interpolate`, `isPalindrome`, `padLeft`, `padRight`, `pluralize`, `randomString`, `repeat`, `reverseString`, `reverseWordsAdvanced`, `singularize`, `startsWithIgnoreCase`, `stripAccents`, `stripHtml`, `stripWhitespace`, `slugify`, `titleCase`, `truncate`, `unescapeHtml`, `removeNumbers`, `truncateWords`, `replaceVowels`, `snakeToCamel`, `camelToKebab`, `endsWith`, `includes`, `removePrefix`, `removeSuffix`

### 🔢 Number Helpers (26)

`clamp`, `decimalPlaces`, `factorial`, `fibonacci`, `isEven`, `isFiniteNumber`, `isInteger`, `isNegative`, `isOdd`, `isPositive`, `isPrime`, `lerp`, `max`, `min`, `random`, `round`, `sum`, `toDegrees`, `toFixedNumber`, `toPercentage`, `toRadians`, `randomInt`, `randomFloat`, `clampBigInt`, `factorialBigInt`, `isEvenBigInt`

### 🟫 Object Helpers (29)

`cloneDeep`, `deepEqual`, `deepMerge`, `entries`, `filterKeys`, `filterValues`, `get`, `invert`, `keys`, `mapValues`, `mapValuesDeep`, `mapKeysDeep`, `merge`, `mergeAll`, `omit`, `omitBy`, `omitDeep`, `pick`, `pickBy`, `pickDeep`, `set`, `unset`, `values`, `assignDeep`, `getOrDefault`, `invertBy`, `has`, `clone`, `assign`

### 🛠 General / Misc Utilities (7)

`debouncePromise`, `deepFreeze`, `identity`, `isEmpty`, `noopAsync`, `pipeAsync`, `uniqueId`

---

## 🛣 Roadmap

### v1.2.x (Latest)

**New Functions (50)**

**Array Utilities (15)**
`union`, `unionBy`, `intersectionBy`, `differenceBy`, `compactBy`, `zip`, `zipWith`, `unzip`, `flattenDepth`, `chunkWhile`, `removeIndex`, `take`, `takeRight`, `dropWhile`, `takeWhile`

**Object Utilities (12)**
`pickBy`, `omitBy`, `mapKeysDeep`, `mapValuesDeep`, `invertBy`, `has`, `unset`, `mergeAll`, `assignDeep`, `pickDeep`, `omitDeep`, `getOrDefault`

**String Utilities (6)**
`removeNumbers`, `truncateWords`, `replaceVowels`, `reverseWordsAdvanced`, `snakeToCamel`, `camelToKebab`

**Number Utilities (5)**
`randomInt`, `randomFloat`, `clampBigInt`, `factorialBigInt`, `isEvenBigInt`

**Function / Misc Utilities (12)**
`tap`, `wrapDeep`, `afterAsync`, `beforeAsync`, `curryN`, `composeN`, `pipeN`, `memoizeN`, `onceNAsync`, `noopAsync`, `identityAsync`, `retryAsync`

**Improvements / Fixes to Existing v1.1 Functions**

- **Array:** `flatten` / `flattenDeep` optimized for large arrays, `unique` improved for all value types, `groupBy` safer & better generics
- **Async:** `debounceAsync`, `queue`, `parallelLimit` optimized; `waitFor` improved; `retryBackoff` predictable; `asyncCompose` / `asyncPipe` optimized
- **Function:** `memoize` / `memoizeAsync` supports deep keys; `tryCatch` improved; `curry`, `partial`, `once`, `after`, `before` improved typings/performance
- **Number:** `fibonacci` / `factorial` memoized, BigInt support; `toFixedNumber` / `toPercentage` fixed; `lerp`, `toDegrees`, `toRadians` improved
- **Object:** `deepEqual` correctness for nested objects/arrays
- **Browser:** `scrollToTop`, `scrollToBottom`, `focusElement` performance/cross-browser improvements; clipboard & cookie helpers refined
- **String:** verify v1.1 functions work; fix edge cases (Unicode, accents, HTML entities)
- **Utility / Misc:** `deepFreeze` improved, `isEmpty` enhanced, `identityAsync`, `noopAsync` fully async-safe

> ✅ **Summary:** 50 new functions added; existing v1.1 functions optimized for performance, type safety, edge cases, and async readiness. Fully additive, strengthening the foundation from v1.1.

---

### v1.1.x

- Introduced 11 new or improved functions, mostly in **string** utilities and `groupBy` for arrays
- Focused on expanding core functionality and improving existing helpers
- Alphabetical test coverage and backward-compatible updates

### v1.0 (Initial Release)

- Core modules implemented: `array`, `async`, `function`, `lang` (later `string`), `number`, `object`, `browser`
- Fully tree-shakable and TypeScript-ready
- Minified UMD bundle for browser usage
- Comprehensive Vitest coverage for all utilities
- Base set of fundamental helpers for each category

---

## ✅ Notes

- **Tree-shaking** works with `import { ... } from 'tweakr'`
- **Browser minified global**: `Tweakr`
- **Per-folder imports** supported for smaller bundles
- All utilities **typed with TypeScript**
- **Tests per folder**, alphabetical order

---

## 🌐 jsDelivr Usage

**UMD minified**

```html
<script src="https://cdn.jsdelivr.net/npm/tweakr/dist/tweakr.min.js"></script>
<script>
  Tweakr.sleep(100).then(() => console.log("Done"));
  console.log(Tweakr.flatten([1, [2, 3]]));
</script>
```

**ESM in browser**

```html
<script type="module">
  import {
    sleep,
    flatten,
  } from "https://cdn.jsdelivr.net/npm/tweakr/dist/tweakr.esm.js";
  await sleep(100);
  console.log(flatten([1, [2, 3]]));
</script>
```

---

## ⚖️ License

MIT License – see `LICENSE` file.

---

## 📜 CHANGELOG

All changes are recorded in `CHANGELOG.md`.

---

## 👥 Community / Contribution

- [Contributing Guidelines](CONTRIBUTING.md) – How to contribute, coding style, and PR workflow
- [Security Policy](SECURITY.md) – Reporting vulnerabilities and best practices
