# Tweakr

![npm](https://img.shields.io/npm/v/tweakr) ![downloads](https://img.shields.io/npm/dw/tweakr) ![license](https://img.shields.io/npm/l/tweakr)

**Tweakr** is a modern, lightweight utility library for JavaScript and TypeScript. It provides **functional, async, array, number, object, string (lang), and browser helpers**, designed to be **modular, tree-shakable, and TypeScript-ready**.

---

## ❓ Why “Tweakr”?

The name **Tweakr** was chosen because the library helps developers **“tweak” their code easily**.

- Every function is **small, modular, and composable** — just like making small tweaks.
- Designed for **efficiency, clarity, and flexibility** in modern JavaScript/TypeScript workflows.
- The name is short, memorable, and reflects the **utility-focused philosophy** behind the package.

---

## 📦 Features

- Functional helpers: `compose`, `pipe`, `debounce`, `throttle`, `memoize`, etc.
- Async utilities: `sleep`, `retry`, `timeout`, `waitFor`
- Array helpers: `flatten`, `chunk`, `unique`, `shuffle`, etc.
- Object helpers: `merge`, `pick`, `omit`, `deepClone`, `get`, `set`
- Number helpers: `clamp`, `random`, `sum`, `average`, `range`
- Browser helpers: `copyToClipboard`, `loadScript`, `loadStyle`, `debounceEvent`, `throttleEvent`
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
```

---

## 📂 Folder Structure

```
src/
├─ array/       → Array utilities
├─ async/       → Async utilities
├─ function/    → Function utilities
├─ lang/        → String / language utilities (v2: string/)
├─ number/      → Number utilities
├─ object/      → Object utilities
├─ browser/     → Browser utilities
└─ index.ts     → Re-exports all utilities
```

**Tests per folder**: `tests/<folder>/` – alphabetical order for consistency.

---

## 🚀 Sample Usage

### Array Utilities

```ts
import { flatten, unique, chunk } from "tweakr/array";

console.log(flatten([1, [2, 3], 2])); // [1,2,3]
console.log(unique([1, 2, 2, 3])); // [1,2,3]
console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1,2],[3,4],[5]]
```

### Async Utilities

```ts
import { sleep, retry, timeout } from "tweakr/async";

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
import { debounce, throttle, memoize, compose } from "tweakr/function";

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
import { camelCase, kebabCase, capitalize, truncate } from "tweakr/lang";

console.log(camelCase("hello world")); // helloWorld
console.log(kebabCase("Hello World")); // hello-world
console.log(capitalize("tweakr")); // Tweakr
console.log(truncate("This is a long sentence", 10)); // This is a…
```

### Number Utilities

```ts
import { clamp, random, sum, range } from "tweakr/number";

console.log(clamp(10, 0, 5)); // 5
console.log(random(1, 10));
console.log(sum([1, 2, 3])); // 6
console.log(range(1, 5)); // [1,2,3,4,5]
```

### Object Utilities

```ts
import { deepClone, merge, pick, omit, get, set } from "tweakr/object";

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
import { copyToClipboard, isOnline, loadScript } from "tweakr/browser";

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

## 🛣 Roadmap

### v1 (Current)

- Fully implemented: `array`, `async`, `function`, `lang`, `number`, `object`, `browser`
- Modular, tree-shakable, TypeScript-ready
- Minified UMD for browser usage
- Comprehensive Vitest coverage

### v2

- Rename `lang/` → `string/`
- Add more string utilities (`replaceAll`, `startsWith`, `endsWith`, `pad`)
- Improve browser helpers (DOM query, event utilities)
- Add more async helpers (`parallelLimit`, `queue`)
- Modular ESM import hints per folder

### v3

- Performance optimization for large arrays/objects
- Optional plugin system
- Optional React / Vue helpers (hooks, directives)
- Additional modern frontend utilities

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
<script src="https://cdn.jsdelivr.net/npm/tweakr@0.7.1/dist/tweakr.min.js"></script>
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
  } from "https://cdn.jsdelivr.net/npm/tweakr@0.7.1/dist/tweakr.esm.js";
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

## 🛡 Security

See [`SECURITY.md`](SECURITY.md) for reporting vulnerabilities and security practices.
