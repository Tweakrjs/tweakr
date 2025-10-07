/**
 * Generates a random alphanumeric string of the specified length.
 *
 * @param length - The desired length of the output string.
 * @returns A random string containing uppercase letters, lowercase letters, and digits.
 *
 * @category String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * randomString(8); // "aZ3kP9xQ"
 * randomString(16); // "G4h9B2jL0mN7pQwR"
 * ```
 */
export function randomString(length: number): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
