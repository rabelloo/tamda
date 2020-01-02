import { infer } from '../function/infer';

/**
 * Filters items that are only in `arrayA`.
 * @note From set theory, given sets A and B, denoted A \ B,
 * returns the set of all members of A that are not members of B.
 * @param arrayA Array to filter.
 * @param arrayB Array to check for duplicates.
 * @param keyFn Optional function to extract a key for comparison between array items. Default: `identity()`.
 * @example
 * difference([1, 2, 3], [2, 3, 4]);
 * // [1]
 */
export function difference<T>(arrayA: T[], arrayB: T[], keyFn?: KeyFn<T>): T[];
/**
 * Returns a function that
 * filters items that are only in `arrayA`.
 * @note From set theory, given sets A and B, denoted A \ B,
 * returns the set of all members of A that are not members of B.
 * @param arrayA Array to filter.
 * @param arrayB Array to check for duplicates.
 * @param keyFn Optional function to extract a key for comparison between array items. Default: `identity()`.
 * @example
 * const diff = difference([2, 3, 4]);
 * diff([1, 2, 3]);
 * // [1]
 */
export function difference<T>(arrayB: T[], keyFn?: KeyFn<T>): typeof deferred;
export function difference() {
  return inferred.apply(undefined, arguments);
}

/**
 * Filters items that are only in `arrayA`.
 * @note From set theory, given sets A and B, denoted A \ B,
 * returns the set of all members of A that are not members of B.
 * @param arrayA Array to filter.
 */
declare function deferred<T>(arrayA: T[]): T[];

const inferred = infer(
  <T>(arrayA: T[], arrayB: T[], keyFn?: KeyFn<T>): T[] => {
    const setB = new Set(keyFn ? arrayB.map(keyFn) : arrayB);

    const filterFn = keyFn
      ? (item: T, index: number) => !setB.has(keyFn(item, index))
      : (item: T) => !setB.has(item);

    return arrayA.filter(filterFn);
  },
  args => [args[0], args[1]].every(arg => arg instanceof Array)
);

type KeyFn<T> = (item: T, index: number) => any;
