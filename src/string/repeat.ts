/**
 * Repeats a string a specified number of times.
 *
 * @param str - The string to repeat.
 * @param times - Number of times to repeat the string. Must be a non-negative integer.
 * @returns The concatenated string repeated `times` times.
 *
 * @group String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * repeat("abc", 3); // "abcabcabc"
 * repeat("!", 5);   // "!!!!!"
 * repeat("hi", 0);  // ""
 * ```
 */
export function repeat(str: string, times: number): string {
  return str.repeat(times);
}
