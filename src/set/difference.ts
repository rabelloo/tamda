import { infer } from '../function/infer';

export const difference: Difference = infer(
  _difference,
  ([, arg2]) => arg2 instanceof Array
);

function _difference<T>(arrayA: T[], arrayB: T[], keyFn?: KeyFn<T>): T[] {
  const setB = new Set(keyFn ? arrayB.map(keyFn) : arrayB);

  return arrayA.filter(
    keyFn
      ? (item, index) => !setB.has(keyFn(item, index))
      : (item) => !setB.has(item)
  );
}

type KeyFn<T> = (item: T, index: number) => unknown;

interface Difference {
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
  <T>(arrayA: T[], arrayB: T[], keyFn?: KeyFn<T>): T[];

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
  <T>(arrayB: T[], keyFn?: KeyFn<T>): PartialIntersection<T>;
}

type PartialIntersection<T> =
  /**
   * Filters items that are only in `arrayA`.
   * @note From set theory, given sets A and B, denoted A \ B,
   * returns the set of all members of A that are not members of B.
   * @param arrayA Array to filter.
   */
  (arrayA: T[]) => T[];
