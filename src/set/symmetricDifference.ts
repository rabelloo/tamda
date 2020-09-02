import { infer } from '../function/infer';
import { difference } from './difference';
import { union } from './union';

/**
 * Filters items that are only in `arrayA` or `arrayB`, but not both.
 * @note From set theory, given sets A and B, denoted A △ B or A ⊖ B,
 * returns the set of symmetricDifference members of exactly one of A and B
 * (elements which are in one of the sets, but not in both).
 * @param arrayA First array to find and compare items.
 * @param arrayB Second array to find and compare items.
 * @param keyFn Optional function to extract a key for comparison between array items. Default: `identity()`.
 * @example
 * symmetricDifference([1, 2, 3], [2, 3, 4]);
 * // [1, 4]
 */
export function symmetricDifference<T>(
  arrayA: T[],
  arrayB: T[],
  keyFn?: KeyFn<T>
): T[];
/**
 * Returns a function that
 * filters items that are only in `arrayA` or `arrayB`, but not both.
 * @note From set theory, given sets A and B, denoted A △ B or A ⊖ B,
 * returns the set of symmetricDifference members of exactly one of A and B
 * (elements which are in one of the sets, but not in both).
 * @param arrayB Second array to find and compare items.
 * @param keyFn Optional function to extract a key for comparison between array items. Default: `identity()`.
 * @example
 * const symDiff = symmetricDifference([2, 3, 4]);
 * symDiff([1, 2, 3]);
 * // [1, 4]
 */
export function symmetricDifference<T>(
  arrayB: T[],
  keyFn?: KeyFn<T>
): typeof deferred;
export function symmetricDifference() {
  return inferred.apply(undefined, arguments);
}

/**
 * Filters items that are only in `arrayA` or `arrayB`, but not both.
 * @note From set theory, given sets A and B, denoted A △ B or A ⊖ B,
 * returns the set of symmetricDifference members of exactly one of A and B
 * (elements which are in one of the sets, but not in both).
 * @param arrayA First array to find and compare items.
 */
declare function deferred<T>(arrayA: T[]): T[];

const inferred = infer(
  <T>(arrayA: T[], arrayB: T[], keyFn?: KeyFn<T>): T[] => {
    const diffA = difference(arrayA, arrayB, keyFn);
    const diffB = difference(arrayB, arrayA, keyFn);

    return union(diffA, diffB, keyFn);
  },
  (args) => [args[0], args[1]].every((arg) => arg instanceof Array)
);

type KeyFn<T> = (item: T, index: number) => any;
