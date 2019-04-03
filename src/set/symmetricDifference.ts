import { infer } from '../function/infer';
import { Unary } from '../operators';
import { difference } from './difference';
import { union } from './union';

export function symmetricDifference<T>(
  arrayA: T[],
  arrayB: T[],
  keyFn?: (item: T, index: number) => any
): T[];
export function symmetricDifference<T>(
  arrayB: T[],
  keyFn?: (item: T, index: number) => any
): Unary<T[], T[]>;
/**
 * Filters items that are only contained in the first array of two given arrays.
 *
 * @note From set theory, givern sets A and B, denoted A △ B or A ⊖ B,
 * returns the set of symmetricDifference members of exactly one of A and B
 * (elements which are in one of the sets, but not in both).
 *
 * @param keyFn An optional function to extract a key for comparison between array items.
 * Default: `identity()`
 *
 * @example
 * ```typescript
 * symmetricDifference([1, 2, 3], [2, 3, 4]);
 * // [1, 4]
 * ```
 */
export function symmetricDifference(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _symmetricDifference(...args);
}

// tslint:disable-next-line: variable-name
const _symmetricDifference = infer(
  <T>(
    arrayA: T[],
    arrayB: T[],
    keyFn?: (item: T, index: number) => any
  ): T[] => {
    const diffA = difference(arrayA, arrayB);
    const diffB = difference(arrayB, arrayA);

    return union(diffA, diffB, keyFn);
  },
  args => [args[0], args[1]].every(arg => arg instanceof Array)
);
