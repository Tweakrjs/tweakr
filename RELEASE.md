# Tweakr v1 – Initial Release 🚀

**Release Date:** 2025-10-06

Tweakr v1 is a **lightweight, modular utility library** for JavaScript and TypeScript. It offers **functional, async, array, number, object, browser, and language helpers**, fully typed, tree-shakable, and thoroughly tested.

---

## 🛠 Key Features

### Array

`chunk`, `compact`, `concat`, `difference`, `drop`, `dropRight`, `fill`, `flatten`, `flattenDeep`, `head`, `initial`, `intersection`, `join`, `groupBy`

### Async

`debounceAsync`, `filterAsync`, `mapAsync`, `memoizeAsync`, `onceAsync`, `parallelLimit`, `queue`, `raceAll`, `reduceAsync`, `retry`, `retryBackoff`, `retryUntil`, `series`, `sleep`, `throttleAsync`, `timeout`, `waitFor`, `waterfall`, `withCancel`, `withTimeout`, `asyncCompose`, `asyncPipe`

### Function

`after`, `before`, `compose`, `curry`, `debounce`, `defer`, `delay`, `memoize`, `noop`, `once`, `partial`, `pipe`, `promisify`, `rateLimit`, `throttle`, `times`, `tryCatch`, `unary`, `wrap`, `yieldToNext`, `asyncCompose`, `asyncPipe`

### Language / String

`camelCase`, `capitalize`, `containsIgnoreCase`, `endsWithIgnoreCase`, `escapeHtml`, `interpolate`, `isPalindrome`, `padLeft`, `padRight`, `pluralize`, `randomString`, `repeat`, `reverseString`, `singularize`, `startsWithIgnoreCase`, `stripAccents`, `stripHtml`, `stripWhitespace`, `slugify`, `titleCase`, `truncate`, `unescapeHtml`, `wordCount`

### Number

`clamp`, `decimalPlaces`, `factorial`, `fibonacci`, `isEven`, `isFiniteNumber`, `isInteger`, `isNegative`, `isOdd`, `isPositive`, `isPrime`, `lerp`, `max`, `min`, `random`, `round`, `sum`, `toDegrees`, `toFixedNumber`, `toPercentage`, `toRadians`

### Object

`cloneDeep`, `deepEqual`, `deepMerge`, `entries`, `filterKeys`, `filterValues`, `get`, `invert`, `keys`, `mapValues`, `merge`, `omit`, `pick`, `set`, `values`

### Browser

`copyToClipboard`, `deleteCookie`, `downloadFile`, `focusElement`, `getCookie`, `getDeviceType`, `getQueryParam`, `getScrollPosition`, `getThemePreference`, `getUserLanguage`, `isInViewport`, `isOnline`, `onVisibilityChange`, `readFromClipboard`, `removeQueryParam`, `scrollToBottom`, `scrollToTop`, `setCookie`, `setFavicon`, `setQueryParam`

### Utilities

`debouncePromise`, `deepFreeze`, `identity`, `isEmpty`, `noopAsync`, `pipeAsync`, `uniqueId`

---

## 🚀 Usage Examples

### ESM / Tree-Shakable

```ts
import { sleep, unique } from "tweakr";

await sleep(100);
console.log(unique([1, 2, 2, 3])); // [1, 2, 3]
```

### CJS / Node.js

```js
const { flatten, debounce } = require("tweakr");

console.log(flatten([1, [2, 3]])); // [1,2,3]
```

### Browser Global (UMD)

```html
<script src="https://cdn.jsdelivr.net/npm/tweakr@1.0.0/dist/tweakr.min.js"></script>
<script>
  console.log(Tweakr.flatten([1, [2, 3]]));
</script>
```

---

## ✅ Notes

- Fully typed and tree-shakable
- Minified global available as `Tweakr`
- Comprehensive Vitest coverage ensures reliability and edge-case safety
- Modular imports supported:

```ts
import { flatten } from "tweakr";
import { retry } from "tweakr";
```
