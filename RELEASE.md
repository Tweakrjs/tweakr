# Tweakr Release Notes

**Site:** [https://tweakrjs.github.io/tweakr/](https://tweakrjs.github.io/tweakr/)

---

## v1.2.x – 2025-10-08

**🔥 New in v1.2.x:**

- **50 new utility functions** across Array, Object, String, Number, and Function/Async categories.
- Focused on **core Lodash-inspired helpers** for arrays, objects, and strings.

### Array Utilities (15)

- `union`, `unionBy`, `intersectionBy`, `differenceBy`, `uniqBy`, `zip`, `zipWith`, `unzip`, `flattenDepth`, `chunkWhile`, `pullAll`, `take`, `takeRight`, `dropWhile`, `takeWhile`

### Object Utilities (12)

- `pickBy`, `omitBy`, `mapKeys`, `mapValues`, `mapValuesDeep`, `invertBy`, `has`, `unset`, `mergeAll`, `assign`, `pickDeep`, `omitDeep`

### String Utilities (6)

- `removeNumbers`, `truncateWords`, `replaceVowels`, `reverseWords`, `snakeToCamel`, `camelToKebab`

### Number Utilities (5)

- `randomInt`, `randomFloat`, `clamp`, `factorialBigInt`, `isEvenBigInt`

### Function / Misc Utilities (12)

- `tap`, `wrap`, `after`, `before`, `curryN`, `composeN`, `pipeN`, `memoizeN`, `onceN`, `noopAsync`, `identityAsync`, `retryAsync`

**Improvements / Fixes:** Optimized performance, type safety, BigInt support, async readiness, edge-case handling for all existing v1.1 functions.

---

## v1.1.x – 2025-10-07

**🔥 New in v1.1.x:**

- **`groupBy`** – Group array elements by a key or callback, safely handling `undefined`/`null` keys.
- **String Utilities v1.1.x added:**
  `endsWith`, `startsWith`, `includes`, `replaceAll`, `trimAll`, `collapseWhitespace`, `ordinalSuffix`, `honorific` (get/remove suffix), `removePrefix`, `removeSuffix`

**Improvements / Fixes:**

- **Array:** `flatten`, `flattenDeep` optimized; `unique` handles all value types efficiently
- **Async:** `waitFor` flexible; `debounceAsync`, `queue`, `parallelLimit` optimized
- **Function:** `memoize`, `memoizeAsync` handle deep objects; `tryCatch` improved
- **Number:** `fibonacci` and `factorial` memoized; `toFixedNumber`, `toPercentage` precision improved
- **Object:** `deepEqual` optimized
- **Browser:** `scrollToTop`, `scrollToBottom`, `focusElement` optimized; clipboard & cookie helpers improved

---

## v1.0.0 – 2025-10-06

**Initial release:**

- **153 utility functions** across **Array, Async, Function, String, Number, Object, Browser, and Misc** categories.
- Fully modular, TypeScript-ready, tree-shakable, with minified UMD for browser usage.
- Core helpers included: `flatten`, `unique`, `debounce`, `memoize`, `cloneDeep`, `endsWith`, `startsWith`, `random`, `sleep`, `copyToClipboard`, etc.

---

### Notes

- Tree-shakable per-folder imports:

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

### String Utilities

```ts
import {
  endsWith,
  removeNumbers,
  truncateWords,
  snakeToCamel,
  camelToKebab,
} from "tweakr";

console.log(endsWith("Hello World", "World")); // true
console.log(removeNumbers("a1b2c3")); // "abc"
console.log(truncateWords("The quick brown fox jumps", 3)); // "The quick brown"
console.log(snakeToCamel("hello_world_test")); // "helloWorldTest"
console.log(camelToKebab("helloWorldTest")); // "hello-world-test"
```

### Number Utilities

```ts
import {
  randomInt,
  randomFloat,
  factorialBigInt,
  isEvenBigInt,
  clamp,
} from "tweakr";

console.log(randomInt(1, 10)); // e.g., 7
console.log(randomFloat(0, 1)); // e.g., 0.456
console.log(factorialBigInt(20n)); // 2432902008176640000n
console.log(isEvenBigInt(42n)); // true
console.log(clamp(15, 0, 10)); // 10
```

### Function / Async Utilities

```ts
import { tap, memoizeN, retryAsync, pipeN, noopAsync } from "tweakr";

console.log(tap([1, 2, 3], (arr) => console.log("Array:", arr))); // logs "Array: [1,2,3]"
const fib = memoizeN((n: number) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2)));
console.log(fib(10)); // 89

await retryAsync(
  async () => {
    if (Math.random() < 0.8) throw new Error("Try again");
    return "Success";
  },
  { maxAttempts: 5 }
);

const add = (x: number) => x + 1;
const double = (x: number) => x * 2;
console.log(pipeN(add, double)(3)); // 8

await noopAsync(); // does nothing asynchronously
```
