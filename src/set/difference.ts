import { infer } from '../function/infer';
import { Unary } from '../operators';

export function difference<T>(
  arrayA: T[],
  arrayB: T[],
  keyFn?: (item: T, index: number) => any
): T[];
export function difference<T>(
  arrayB: T[],
  keyFn?: (item: T, index: number) => any
): Unary<T[], T[]>;
/**
 * Filters items that are only in the array A.
 *
 * @note From set theory, given sets A and B, denoted A \ B,
 * returns the set of all members of A that are not members of B.
 *
 * @param keyFn An optional function to extract a key for comparison between array items.
 * Default: `identity()`
 *
 * @example
 * difference([1, 2, 3], [2, 3, 4]);
 * // [1]
 */
export function difference(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _difference(...args);
}

// tslint:disable-next-line: variable-name
const _difference = infer(
  <T>(
    arrayA: T[],
    arrayB: T[],
    keyFn?: (item: T, index: number) => any
  ): T[] => {
    const setB = new Set(keyFn ? arrayB.map(keyFn) : arrayB);

    const filterFn = keyFn
      ? (item: T, index: number) => !setB.has(keyFn(item, index))
      : (item: T) => !setB.has(item);

    return arrayA.filter(filterFn);
  },
  args => [args[0], args[1]].every(arg => arg instanceof Array)
);
