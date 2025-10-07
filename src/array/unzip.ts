/**
 * Transposes an array of arrays.
 *
 * @example
 * unzip([[1,'a'],[2,'b']]); // [[1,2],['a','b']]
 *
 * @param array - Array of arrays
 * @returns Transposed array
 *
 * @group Array
 * @since 1.2.0
 */
export function unzip(array: any[][]): any[][] {
  if (array.length === 0) return [];
  const maxLength = Math.max(...array.map((row) => row.length));
  const result: any[][] = [];
  for (let i = 0; i < maxLength; i++) {
    result[i] = array.map((row) => row[i]);
  }
  return result;
}
