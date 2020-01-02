/**
 * Creates an array with incremental numbers spanning from `min` to `max`.
 * @param min First number on the array.
 * @param max Last number on the array.
 *
 * @example
 * range(1, 5)
 * // [1, 2, 3, 4, 5]
 */
export function range(min: number, max: number) {
  return Array(max + 1 - min)
    .fill(null)
    .map((_, i) => i + min);
}
