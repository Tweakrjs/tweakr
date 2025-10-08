/**
 * Tweakr v1.2 – Latest Release 🚀
 * Release Date: 2025-10-08
 *
 * A modern, lightweight utility library for JavaScript/TypeScript.
 * Provides functional, async, array, number, object, browser, and string helpers,
 * fully typed, tree-shakable, and thoroughly tested.
 *
 * ## Installation
 *
 * ### npm
 * ```bash
 * npm install tweakr
 * ```
 *
 * ### yarn
 * ```bash
 * yarn add tweakr
 * ```
 *
 * ### pnpm
 * ```bash
 * pnpm add tweakr
 * ```
 *
 * ## Usage
 *
 * ### ESM / Tree-Shakable
 * ```ts
 * import { flatten, unique } from 'tweakr';
 *
 * console.log(flatten([1,[2,3]])); // [1,2,3]
 * console.log(unique([1,2,2,3]));  // [1,2,3]
 * ```
 *
 * ### CJS / Node.js
 * ```js
 * const { flatten, debounce } = require('tweakr');
 * console.log(flatten([1,[2,3]])); // [1,2,3]
 * ```
 *
 * ### Browser Global (UMD)
 * ```html
 * <script src="https://cdn.jsdelivr.net/npm/tweakr/dist/tweakr.min.js"></script>
 * <script>
 *   console.log(Tweakr.flatten([1,[2,3]]));
 * </script>
 * ```
 *
 * ## Updates / Changelog
 *
 * **v1.2.0** – 2025-10-08
 * - Added 50 new functions across Array, Object, String, Number, and Function/Misc utilities
 *   - Array: union, unionBy, intersectionBy, differenceBy, compactBy, zip, zipWith, unzip,
 *     flattenDepth, chunkWhile, removeIndex, take, takeRight, dropWhile, takeWhile
 *   - Object: pickBy, omitBy, mapKeysDeep, mapValuesDeep, invertBy, has, unset, mergeAll,
 *     assignDeep, pickDeep, omitDeep, getOrDefault
 *   - String: removeNumbers, truncateWords, replaceVowels, reverseWordsAdvanced,
 *     snakeToCamel, camelToKebab
 *   - Number: randomInt, randomFloat, clampBigInt, factorialBigInt, isEvenBigInt
 *   - Function / Misc: tap, wrapDeep, afterAsync, beforeAsync, curryN, composeN, pipeN,
 *     memoizeN, onceNAsync, noopAsync, identityAsync, retryAsync
 * - Improvements to existing v1.1 functions for performance, type safety, and edge cases
 *   (flattenDeep, unique, groupBy, debounceAsync, queue, parallelLimit, waitFor, memoizeAsync,
 *   tryCatch, curry, partial, once, after, before, fibonacci, factorial, deepEqual, scrollToTop,
 *   scrollToBottom, focusElement, clipboard & cookie helpers, string utilities, deepFreeze,
 *   isEmpty, identityAsync, noopAsync)
 *
 * **v1.1.0** – 2025-10-06
 * - Added groupBy to Array utilities
 * - Added new string helpers: replaceAll, startsWith, endsWith, padLeft, padRight
 * - Optimized flattenDeep for large arrays
 *
 * **v1.0.0** – 2025-10-06
 * - Initial release with 153 functions across array, async, function, number, object, browser, and string modules
 *
 * ## Key Features
 *
 * ### Array
 * chunk, compact, concat, difference, differenceBy, drop, dropRight, fill, flatten, flattenDeep,
 * flattenDepth, head, initial, intersection, intersectionBy, join, shuffle, unique, union, unionBy,
 * zip, zipWith, unzip, chunkWhile, removeIndex, take, takeRight, dropWhile, takeWhile, groupBy
 *
 * ### Async
 * debounceAsync, filterAsync, mapAsync, memoizeAsync, onceAsync, parallelLimit, queue, raceAll,
 * reduceAsync, retry, retryBackoff, retryUntil, series, sleep, throttleAsync, timeout, waitFor,
 * waterfall, withCancel, withTimeout, asyncCompose, asyncPipe
 *
 * ### Function
 * after, before, compose, curry, debounce, defer, delay, memoize, noop, once, partial, pipe,
 * promisify, rateLimit, throttle, times, tryCatch, unary, wrap, yieldToNext,
 * tap, wrapDeep, afterAsync, beforeAsync, curryN, composeN, pipeN, memoizeN, onceNAsync,
 * noopAsync, identityAsync, retryAsync
 *
 * ### String
 * camelCase, capitalize, containsIgnoreCase, endsWithIgnoreCase, escapeHtml, interpolate,
 * isPalindrome, padLeft, padRight, pluralize, randomString, repeat, reverseString, reverseWordsAdvanced,
 * singularize, startsWithIgnoreCase, stripAccents, stripHtml, stripWhitespace, slugify, titleCase,
 * truncate, unescapeHtml, wordCount, endsWith, honorific, includes, removePrefix, removeSuffix,
 * replaceAll, startsWith, trimAll, collapseWhitespace, ordinalSuffix, removeNumbers, truncateWords,
 * replaceVowels, snakeToCamel, camelToKebab
 *
 * ### Number
 * clamp, decimalPlaces, factorial, fibonacci, isEven, isFiniteNumber, isInteger, isNegative, isOdd,
 * isPositive, isPrime, lerp, max, min, random, round, sum, toDegrees, toFixedNumber, toPercentage,
 * toRadians, randomInt, randomFloat, clampBigInt, factorialBigInt, isEvenBigInt
 *
 * ### Object
 * cloneDeep, deepEqual, deepMerge, entries, filterKeys, filterValues, get, invert, keys, mapValues,
 * mapValuesDeep, mapKeysDeep, merge, mergeAll, omit, omitBy, omitDeep, pick, pickBy, pickDeep, set,
 * unset, values, assignDeep, getOrDefault, has, invertBy
 *
 * ### Browser
 * copyToClipboard, deleteCookie, downloadFile, focusElement, getCookie, getDeviceType, getQueryParam,
 * getScrollPosition, getThemePreference, getUserLanguage, isInViewport, isOnline, onVisibilityChange,
 * readFromClipboard, removeQueryParam, scrollToBottom, scrollToTop, setCookie, setFavicon, setQueryParam
 *
 * ### Utilities
 * debouncePromise, deepFreeze, identity, isEmpty, noopAsync, pipeAsync, uniqueId
 *
 * # Methods
 * @packageDocumentation
 */

export * from "./array/__index";
export * from "./async/__index";
export * from "./browser/__index";
export * from "./function/__index";
export * from "./string/__index";
export * from "./number/__index";
export * from "./object/__index";
export * from "./util/__index";
